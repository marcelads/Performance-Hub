# Performance Hub

Sistema completo de gamificação para operação comercial com mais de 100 consultores. Cobre ranking, metas, premiação, duelos (X1) e fechamento diário com histórico imutável e auditoria completa.

Antes do sistema, o fechamento era feito manualmente em Excel com múltiplas etapas, levando cerca de 30 minutos mesmo nas mãos de quem dominava o processo. Hoje é executado em segundos.

**Stack:** Python · FastAPI · MySQL · PostgreSQL · Supabase · React · Power BI · Railway  
**Deploy:** Railway  
**Auth:** JWT · Supabase Auth  

---

## O que o sistema faz

- Sincroniza contratos do sistema legado via pipeline de ingestão
- Calcula pontuação por contrato com base nas regras de série
- Gera ranking diário e acumulado por consultor, equipe e regional
- Calcula premiação com base em metas e multiplicadores
- Registra fechamento com histórico versionado e imutável
- Permite refazer fechamentos com auditoria completa de versões

---

## Arquitetura

```
Sistema legado (HTML)
    ↓
Ingestão via API (preview + execução)
    ↓
FastAPI (Arquitetura modular orientada a separação de responsabilidades)
    ↓
MySQL (fato_contratos, fato_fechamento, logs)
    ↓
React (frontend)   +   Power BI (dashboards executivos)
    ↓
Railway (deploy)
```

---

## API

Todos os endpoints requerem autenticação JWT, exceto login e health check. Documentação completa via OpenAPI.

| Módulo | Responsabilidade |
|---|---|
| Auth | Login, troca de senha, recuperação, perfil |
| Rankings | Ranking de consultores, equipes, regionais, atendentes e cooperativas |
| Premiação | Premiação diária, snapshots, histórico de vencedores, tetos |
| Metas | Metas pessoais e por equipe, semáforo de metas |
| Contratos | CRUD de contratos, visão por consultor e equipe |
| X1 | Duelos mensais, criação, fechamento, histórico e recálculo |
| Fechamento | Execução, histórico, versionamento por data |
| Usuários | Gestão de usuários, equipes, cooperativas, regionais, líderes, logs |
| Ingestão | Preview e execução de ingestão de contratos, consultores, X1, metas |
| Config | Configuração de pontuação e recálculo |
| Exportação | Exportação de placas e colunas |
| Notificações | Tickets, notificações, leitura e status |
| Admin | Migrations e status do banco |

80+ rotas documentadas.

[Documentação da API](assets/swagger.pdf)

---

## Fluxo de fechamento diário

```
18h - Admin executa "Fechar Dia"
    ↓
Backend verifica sistema legado
    ↓
Sincroniza contratos do dia
    ↓
Calcula pontuação (regras de série)
    ↓
Gera ranking (dia e acumulado)
    ↓
Calcula premiação (meta x multiplicador x série)
    ↓
Grava fato_fechamento (IMUTÁVEL - versão 1)
    ↓
Grava logs de auditoria
    ↓
Consultores veem resultado atualizado
```

Se houver erro após o fechamento, o admin executa "Refazer Dia X". O sistema cria versão 2, a versão 1 fica em auditoria e os consultores passam a ver a versão mais recente.

---

## Sistema de séries e pontuação

Consultores são classificados em séries com base na performance mensal. Cada série tem premiação base e regras de pontuação distintas.

Exemplo de cálculo:

```
Tipo A:     X pontos
Adicional 1: +X pontos
Adicional 2: +X pontos
Total:        X pontos
```

Multiplicadores de premiação variam por tipo de dia (normal, feriado).

---

## Sistema de metas

| Nível | Descrição |
|---|---|
| N1 | Entrada |
| N2 | Intermediário |
| N3 | Padrão |
| N4 | Avançado |
| N5 | Elite |

Semáforo de metas exposto via API para visualização em tempo real no frontend e no Power BI.

---

## Disputa mensal

Duelos 1v1 entre consultores definidos no início do mês. Acompanhamento diário, fechamento mensal com histórico e recálculo disponível para auditoria.

---

## Hierarquia de permissões

```
Admin
    ↓
Diretor Regional
    ↓
Líder
    ↓
Consultor
```

RLS em três camadas: Lovable (frontend), Supabase e middleware JWT.

---

## Ingestão do sistema legado

O sistema legado exporta dados em HTML e XLS. A API tem endpoints de preview (valida antes de executar) e execução para cada tipo de ingestão: contratos, consultores, X1 e metas pessoais.

O preview evita que ingestões com erro comprometam o fechamento do dia.

---

## Código

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from interfaces.api.v1 import (
    auth, rankings, premiacao, metas,
    contratos, x1, fechamento, usuarios
)

app = FastAPI(
    title="Performance Hub API",
    description= Arquitetura modular orientada a separação de responsabilidades,
    version="0.2.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Ajustar em produção
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router,       prefix="/api/v1/auth")
app.include_router(rankings.router,   prefix="/api/v1/rankings")
app.include_router(premiacao.router,  prefix="/api/v1/premiacao")
app.include_router(metas.router,      prefix="/api/v1/metas")
app.include_router(contratos.router,  prefix="/api/v1/contratos")
app.include_router(x1.router,         prefix="/api/v1/x1")
app.include_router(fechamento.router, prefix="/api/v1/fechamento")
app.include_router(usuarios.router,   prefix="/api/v1/usuarios")

@app.get("/", tags=["Health"])
def health():
    return {"status": "ok", "version": "0.2.0", "env": "mock"}
```

---

> Dados, nomes de clientes e informações sensíveis foram removidos ou abstraídos. O foco é demonstrar arquitetura, padrões técnicos e lógica de negócio.
