import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from interfaces.api.v1 import auth, rankings, premiacao, metas, contratos, x1, fechamento, usuarios

app = FastAPI(
    title="Performance Hub API",
    description="Backend Clean Architecture. Rankings, premiacao, metas, fechamento e gamificacao comercial.",
    version="0.2.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Ajustar em producao
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(auth.router,       prefix="/api/v1/auth",       tags=["Auth"])
app.include_router(rankings.router,   prefix="/api/v1/rankings",   tags=["Rankings"])
app.include_router(premiacao.router,  prefix="/api/v1/premiacao",  tags=["Premiacao"])
app.include_router(metas.router,      prefix="/api/v1/metas",      tags=["Metas"])
app.include_router(contratos.router,  prefix="/api/v1/contratos",  tags=["Contratos"])
app.include_router(x1.router,         prefix="/api/v1/x1",         tags=["X1"])
app.include_router(fechamento.router, prefix="/api/v1/fechamento", tags=["Fechamento"])
app.include_router(usuarios.router,   prefix="/api/v1/usuarios",   tags=["Usuarios"])


@app.get("/", tags=["Health"])
def health():
    return {"status": "ok", "version": "0.2.0", "env": "production"}
