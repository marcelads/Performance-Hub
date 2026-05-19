<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Marcela Silva — Analista de Dados</title>
  <meta name="description" content="Portfolio de Marcela Silva — Analista de Dados. Do dashboard executivo ao backend de produção." />
  <link rel="stylesheet" href="style.css" />
  <link rel="icon" type="image/png" href="assets/logo-m.png" />
</head>
<body>

  <!-- background layers -->
  <div class="bg-orb" aria-hidden="true"></div>
  <div class="bg-orb two" aria-hidden="true"></div>
  <div class="bg-grid" aria-hidden="true"></div>

  <!-- custom cursor -->
  <div id="cursor-ring" class="hidden" aria-hidden="true"></div>
  <div id="cursor-dot" class="hidden" aria-hidden="true"></div>

  <!-- NAV -->
  <nav class="topnav">
    <div class="container">
      <a href="#hero" class="nav-logo">
        <span class="m-mark" aria-hidden="true"></span>
        <span class="full">MARCELA SILVA</span>
        <span class="short">MS.</span>
      </a>
      <ul class="nav-links">
        <li><a href="#hero">início</a></li>
        <li><a href="#sobre">sobre</a></li>
        <li><a href="#projetos">projetos</a></li>
        <li><a href="#contato">contato</a></li>
      </ul>
    </div>
  </nav>

  <!-- HERO -->
  <section id="hero">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-text">
          <div class="hero-tag">// analista de dados</div>
          <h1 class="hero-name" data-text="MARCELA SILVA.">
            <span class="line">MARCELA</span>
            <span class="line">SILVA<span class="dot">.</span></span>
          </h1>
          <p class="hero-tagline">
            Do dashboard executivo<br>
            ao backend de produção.
          </p>

          <div class="hero-actions">
            <a href="#projetos" class="btn primary">
              Ver projetos <span class="arrow">↓</span>
            </a>
                      <a href="https://www.linkedin.com/in/amarcelasilva" target="_blank" rel="noopener" class="btn outline link-out">
              LinkedIn <span class="arrow">↗</span>
            </a>
          </div>

          <div class="stack-badges" aria-label="Stack principal">
            <span class="badge">Power BI</span>
            <span class="badge">Python</span>
            <span class="badge">FastAPI</span>
            <span class="badge">DAX</span>
            <span class="badge">SQL</span>
            <span class="badge">PostgreSQL</span>
          </div>
        </div>

        <div class="hero-photo">
          <div class="foto-container">
            <div class="inner">
              <img src="assets/foto.png" alt="Marcela Silva" class="portrait" />
            </div>
            <div class="proj-badge">
              <span class="num">10+</span>
              <span>projetos<br>em produção</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-indicator" aria-hidden="true">
      <span>scroll</span>
      <span class="line"></span>
    </div>
  </section>

  <!-- SOBRE -->
  <section id="sobre" class="block alt-bg">
    <div class="container">
      <div data-reveal>
        <div class="section-tag">// sobre</div>
        <h2 class="section-title">Comecei na operação.</h2>
        <p class="section-subtitle">
          Onze anos depois, estou transformando operação em dado.
        </p>
      </div>

      <div class="sobre-grid" data-reveal>
        <p>
          Trabalho na interseção entre <strong>análise, engenharia e produto</strong>.
          Construo desde dashboards executivos usados pela diretoria
          até backends de sistemas completos com versionamento e
          auditoria. Meus projetos saem do quadro branco e vão
          para produção.
        </p>
        <p>
          Antes de dados, fui <strong>criadora de realidade aumentada</strong>.
          Trabalhei com Meta, Embratur e Governo da Bahia, venci
          um concurso global da Meta e palestrei sobre tecnologias
          emergentes. Quando a plataforma foi descontinuada em 2025,
          virei a chave para dados e não olhei para trás.
        </p>
      </div>

      <div class="impact-row stagger" data-reveal>
        <div class="impact-item">
          <div class="num"><span data-count="10" data-suffix="+">0</span></div>
          <div class="label">projetos<br>em produção</div>
        </div>
        <div class="impact-item">
          <div class="num"><span data-count="100" data-suffix="+">0</span></div>
          <div class="label">consultores<br>na operação</div>
        </div>
        <div class="impact-item">
          <div class="num"><span data-count="2" data-suffix="">0</span></div>
          <div class="label">anos<br>em BI</div>
        </div>
        <div class="impact-item">
          <div class="num"><span data-count="80" data-suffix="+">0</span></div>
          <div class="label">endpoints<br>de API</div>
        </div>
      </div>

      <div data-reveal>
        <div class="stack-title">// stack</div>
        <div class="stack-grid stagger">
          <span class="stack-pill">Power BI</span>
          <span class="stack-pill">DAX</span>
          <span class="stack-pill">Power Query (M)</span>
          <span class="stack-pill">Python</span>
          <span class="stack-pill">FastAPI</span>
          <span class="stack-pill">pdfplumber</span>
          <span class="stack-pill">MySQL</span>
          <span class="stack-pill">PostgreSQL</span>
          <span class="stack-pill">Supabase</span>
          <span class="stack-pill">React</span>
          <span class="stack-pill">Node.js</span>
          <span class="stack-pill">SQL</span>
          <span class="stack-pill">Excel</span>
          <span class="stack-pill">Git</span>
        </div>
      </div>
    </div>
  </section>

  <!-- PROJETOS -->
  <section id="projetos" class="block">
    <div class="container">
      <div data-reveal>
        <div class="section-tag">// projetos</div>
        <h2 class="section-title">Do problema ao código.</h2>
        <p class="section-subtitle">
          Projetos reais. Dados anonimizados conforme acordo com os clientes.
        </p>
      </div>

      <div class="projects-grid">
        <!-- 01 -->
        <a href="projects/facilita-bi.html" class="project-card" data-reveal>
          <div class="counter">Projeto<b>01<span style="color:var(--text-muted);font-size:0.5em;letter-spacing:0.05em;font-weight:400;"> / 04</span></b></div>
          <div class="img-wrap">
            <img src="assets/projects/facilita-bi.svg" alt="Dashboard executivo Facilita BI" loading="lazy" />
            <div class="open-cue">
              <span>preview · facilita bi</span>
              <span class="arrow">↗</span>
            </div>
          </div>
          <div class="body">
            <div class="num">// 01 — Ecossistema Analítico</div>
            <h3>Fac.  BI — Ecossistema Analítico</h3>
            <p class="desc">
              BI multi-tenant para operação 0800 entre as maiores do Brasil.
              Três audiências, um modelo, isolamento de dados por cliente
              via Power Query.
            </p>
            <div class="tech">
              <span class="badge">Power BI</span>
              <span class="badge">DAX</span>
              <span class="badge">M</span>
              <span class="badge">Excel</span>
            </div>
            <span class="card-link"><span>Ler estudo de caso</span> <span class="arrow">→</span></span>
          </div>
        </a>

        <!-- 02 -->
        <a href="projects/associacao-bi.html" class="project-card" data-reveal>
          <div class="counter">Projeto<b>02<span style="color:var(--text-muted);font-size:0.5em;letter-spacing:0.05em;font-weight:400;"> / 04</span></b></div>
          <div class="img-wrap">
            <img src="assets/projects/associacao-bi.svg" alt="Dashboard BI Associação" loading="lazy" />
            <div class="open-cue">
              <span>preview · bi associação</span>
              <span class="arrow">↗</span>
            </div>
          </div>
          <div class="body">
            <div class="num">// 02 — Financeiro &amp; Comercial</div>
            <h3>BI Associação — Financeiro &amp; Comercial</h3>
            <p class="desc">
              Dashboards financeiro e comercial com rateio proporcional de
              custos. Pipeline Python → Power BI com extração automática
              de PDFs.
            </p>
            <div class="tech">
              <span class="badge">Power BI</span>
              <span class="badge">DAX</span>
              <span class="badge">Python</span>
              <span class="badge">pdfplumber</span>
            </div>
            <span class="card-link"><span>Ler estudo de caso</span> <span class="arrow">→</span></span>
          </div>
        </a>

        <!-- 03 -->
        <a href="projects/performance-hub.html" class="project-card" data-reveal>
          <div class="counter">Projeto<b>03<span style="color:var(--text-muted);font-size:0.5em;letter-spacing:0.05em;font-weight:400;"> / 04</span></b></div>
          <div class="img-wrap">
            <img src="assets/projects/performance-hub.svg" alt="Sistema Performance Hub" loading="lazy" />
            <div class="open-cue">
              <span>preview · performance hub</span>
              <span class="arrow">↗</span>
            </div>
          </div>
          <div class="body">
            <div class="num">// 03 — Gamificação em produção</div>
            <h3>Performance Hub</h3>
            <p class="desc">
              Sistema de gamificação para operação com 100+ consultores.
              Fechamento manual de 30 min → segundos. Histórico imutável
              e auditável.
            </p>
            <div class="tech">
              <span class="badge">FastAPI</span>
              <span class="badge">MySQL</span>
              <span class="badge">React</span>
              <span class="badge">Power BI</span>
              <span class="badge">Supabase</span>
            </div>
            <span class="card-link"><span>Ler estudo de caso</span> <span class="arrow">→</span></span>
          </div>
        </a>

        <!-- 04 -->
        <a href="projects/contrax.html" class="project-card" data-reveal>
          <div class="counter">Projeto<b>04<span style="color:var(--text-muted);font-size:0.5em;letter-spacing:0.05em;font-weight:400;"> / 04</span></b></div>
          <div class="img-wrap">
            <img src="assets/projects/contrax.svg" alt="ContraX Extract" loading="lazy" />
            <div class="open-cue">
              <span>preview · contrax extract</span>
              <span class="arrow">↗</span>
            </div>
          </div>
          <div class="body">
            <div class="num">// 04 — Desktop / Automação</div>
            <h3>ContraX Extract</h3>
            <p class="desc">
              Extração automática de contracheques PDF para Excel
              estruturado. Interface desktop, validação automática,
              aba de alertas.
            </p>
            <div class="tech">
              <span class="badge">Python</span>
              <span class="badge">pdfplumber</span>
              <span class="badge">openpyxl</span>
              <span class="badge">Tkinter</span>
            </div>
            <span class="card-link"><span>Ler estudo de caso</span> <span class="arrow">→</span></span>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- CONTATO -->
  <section id="contato" class="block alt-bg">
    <div class="container">
      <div data-reveal>
        <div class="section-tag">// contato</div>
        <h2 class="section-title">Vamos conversar.</h2>
      </div>

      <div class="contato-grid">
        <div data-reveal>
          <p>
            Estou disponível para projetos freelance,
            posições CLT e conversas sobre dados.
          </p>
          <p>
            Se você chegou até aqui, provavelmente
            temos algo a conversar.
          </p>

          <div class="code-snippet" aria-hidden="true">
<span class="c">// disponível para novos projetos</span>
<span class="k">const</span> <span class="v">status</span> = <span class="s">"open_to_work"</span>;</div>
        </div>

        <div class="contact-links stagger" data-reveal>
          <a href="mailto:dadosmarcela@gmail.com" class="contact-link">
            <span>→ amarcelas@gmail.com</span>
            <span class="arrow">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/amarcelasilva" target="_blank" rel="noopener" class="contact-link">
            <span>→ linkedin.com/in/amarcelasilva</span>
            <span class="arrow">↗</span>
          </a>
          <a href="https://github.com/marcelads" target="_blank" rel="noopener" class="contact-link">
            <span>→ github.com/marcelads</span>
            <span class="arrow">↗</span>
          </a>
          <a href="https://wa.me/+5581994644615?text=Ol%C3%A1!" target="_blank" rel="noopener" class="contact-link">
            <span>→ WhatsApp · (81) 99464-4615</span>
            <span class="arrow">↗</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <span class="logo-mark">MARCELA SILVA</span>
      <span>Feito com dados e intenção.</span>
      <span>© <span id="year">2026</span> Marcela Silva</span>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
