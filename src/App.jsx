import { useState } from "react";

const PHASES = [
  {
    id: "fase1",
    label: "FASE 1",
    subtitle: "Base & Condicionamento",
    period: "15 Jun – 31 Jul",
    color: "#2D6A4F",
    bg: "#D8F3DC",
    weeks: [
      {
        n: 1, dates: "15–21 Jun",
        seg: "Força A (academia)", ter: "Repouso / caminhada 20min", qua: "Força B (academia)", qui: "Caminhada rápida 30min", sex: "Força A (academia)", sab: "Repouso ativo / alongamento", dom: "Repouso"
      },
      {
        n: 2, dates: "22–28 Jun",
        seg: "Força A (academia)", ter: "Caminhada 35min", qua: "Força B (academia)", qui: "Trote leve 2km + caminhar 1km", sex: "Força A (academia)", sab: "Yoga/mobilidade 30min", dom: "Repouso"
      },
      {
        n: 3, dates: "29 Jun–05 Jul",
        seg: "Força A (academia)", ter: "Trote 3km pace livre", qua: "Força B (academia)", qui: "Trote 3km + strides 4x80m", sex: "Força A (academia)", sab: "Repouso ativo", dom: "Repouso"
      },
      {
        n: 4, dates: "06–12 Jul",
        seg: "Força A (academia)", ter: "Trote 4km", qua: "Força B (academia)", qui: "Fartlek 4km (1min rápido/2min leve)", sex: "Força A (academia)", sab: "Alongamento + core 20min", dom: "Repouso"
      },
      {
        n: 5, dates: "13–19 Jul",
        seg: "Força B (academia)", ter: "Corrida 5km pace ~7min/km", qua: "Força A (academia)", qui: "Intervalado: 5x400m c/ 90s descanso", sex: "Repouso", sab: "Corrida 6km pace confortável", dom: "Repouso"
      },
      {
        n: 6, dates: "20–26 Jul",
        seg: "Força B (academia)", ter: "Corrida 6km", qua: "Força A (academia)", qui: "Tempo run 4km a 6:30min/km", sex: "Repouso", sab: "Corrida 7km", dom: "Repouso"
      },
      {
        n: 7, dates: "27–31 Jul",
        seg: "Força B (academia)", ter: "Corrida 7km", qua: "Força A (academia)", qui: "Intervalado: 6x400m", sex: "Repouso", sab: "Corrida 8km", dom: "Repouso"
      },
    ]
  },
  {
    id: "fase2",
    label: "FASE 2",
    subtitle: "Desenvolvimento Aeróbico",
    period: "01 Ago – 30 Set",
    color: "#1B4332",
    bg: "#B7E4C7",
    weeks: [
      {
        n: 8, dates: "01–07 Ago",
        seg: "Força A (academia)", ter: "Corrida 8km", qua: "Força B (academia)", qui: "Fartlek 8km", sex: "Repouso", sab: "Corrida longa 10km", dom: "Repouso"
      },
      {
        n: 9, dates: "08–14 Ago",
        seg: "Força A (academia)", ter: "Corrida 9km", qua: "Força B (academia)", qui: "Tempo run 6km a 6:20min/km", sex: "Repouso", sab: "Corrida longa 11km", dom: "Repouso"
      },
      {
        n: 10, dates: "15–21 Ago",
        seg: "Força A (academia)", ter: "Corrida 9km", qua: "Força B (academia)", qui: "Intervalado: 8x400m", sex: "Repouso", sab: "Corrida longa 12km", dom: "Repouso"
      },
      {
        n: 11, dates: "22–28 Ago", label: "⚡ SEMANA DE RECUPERAÇÃO",
        seg: "Força A (leve)", ter: "Corrida 6km", qua: "Mobilidade 30min", qui: "Corrida 6km", sex: "Repouso", sab: "Corrida 8km", dom: "Repouso"
      },
      {
        n: 12, dates: "29 Ago–04 Set",
        seg: "Força A (academia)", ter: "Corrida 10km", qua: "Força B (academia)", qui: "Tempo run 7km", sex: "Repouso", sab: "Corrida longa 13km", dom: "Repouso"
      },
      {
        n: 13, dates: "05–11 Set",
        seg: "Força A (academia)", ter: "Corrida 10km", qua: "Força B (academia)", qui: "Intervalado: 6x800m", sex: "Repouso", sab: "Corrida longa 14km", dom: "Repouso"
      },
      {
        n: 14, dates: "12–18 Set",
        seg: "Força A (academia)", ter: "Corrida 11km", qua: "Força B (academia)", qui: "Fartlek 10km", sex: "Repouso", sab: "Corrida longa 15km", dom: "Repouso"
      },
      {
        n: 15, dates: "19–25 Set",
        seg: "Força A (academia)", ter: "Corrida 11km", qua: "Força B (academia)", qui: "Tempo run 8km a 6:10min/km", sex: "Repouso", sab: "Corrida longa 16km", dom: "Repouso"
      },
      {
        n: 16, dates: "26–30 Set", label: "⚡ SEMANA DE RECUPERAÇÃO",
        seg: "Força A (leve)", ter: "Corrida 7km", qua: "Mobilidade 30min", qui: "Corrida 7km", sex: "Repouso", sab: "Corrida 10km", dom: "Repouso"
      },
    ]
  },
  {
    id: "fase3",
    label: "FASE 3",
    subtitle: "Volume & Transição para Rua",
    period: "01 Out – 01 Nov",
    color: "#40916C",
    bg: "#95D5B2",
    weeks: [
      {
        n: 17, dates: "01–07 Out",
        seg: "Força B (academia)", ter: "Corrida 12km (última semana de academia como base)", qua: "Força A (academia)", qui: "Intervalado: 8x800m", sex: "Repouso", sab: "Corrida longa 17km", dom: "Repouso"
      },
      {
        n: 18, dates: "08–14 Out",
        seg: "Força B (academia)", ter: "Corrida 12km", qua: "Força A (academia)", qui: "Tempo run 10km a 6:05min/km", sex: "Repouso", sab: "Corrida longa 18km", dom: "Repouso"
      },
      {
        n: 19, dates: "15–21 Out",
        seg: "Força B (academia)", ter: "Corrida 13km", qua: "Força A (academia)", qui: "Fartlek 12km", sex: "Repouso", sab: "Corrida longa 19km 🏅", dom: "Repouso"
      },
      {
        n: 20, dates: "22–28 Out", label: "⚡ SEMANA DE RECUPERAÇÃO",
        seg: "Força A (leve)", ter: "Corrida 8km", qua: "Mobilidade 40min", qui: "Corrida 8km", sex: "Repouso", sab: "Corrida 12km", dom: "Repouso"
      },
      {
        n: 21, dates: "29–01 Nov",
        seg: "Força B", ter: "Corrida 13km", qua: "Repouso", qui: "Corrida 10km", sex: "Repouso", sab: "🏁 MARCO: 20km com tênis ON novo!", dom: "Repouso"
      },
    ]
  }
];

const TREINOS = [
  {
    nome: "Treino de Força A — Corrida & Core",
    foco: "Glúteos, Posterior de coxa, Core",
    exercicios: [
      { ex: "Agachamento livre", series: "4x12", obs: "Controle na descida, joelho alinhado" },
      { ex: "Stiff bilateral", series: "3x12", obs: "Fortalece posterior — essencial p/ corrida" },
      { ex: "Avanço caminhando com halteres", series: "3x10 cada perna", obs: "Simula passada de corrida" },
      { ex: "Elevação pélvica (hip thrust)", series: "4x15", obs: "Ativa glúteo para propulsão" },
      { ex: "Prancha frontal", series: "3x40s", obs: "" },
      { ex: "Prancha lateral", series: "3x30s cada", obs: "" },
      { ex: "Dead bug", series: "3x10", obs: "Core anti-rotacional" },
      { ex: "Panturrilha em pé", series: "4x20", obs: "Fundamental para corrida" },
    ]
  },
  {
    nome: "Treino de Força B — Superiores & Mobilidade",
    foco: "Postura, respiração, equilíbrio muscular",
    exercicios: [
      { ex: "Remada curvada", series: "4x12", obs: "Postura durante corrida" },
      { ex: "Supino inclinado com halteres", series: "3x12", obs: "" },
      { ex: "Desenvolvimento com halteres", series: "3x12", obs: "" },
      { ex: "Rosca direta", series: "3x15", obs: "Balanço de braços" },
      { ex: "Extensão de tríceps", series: "3x15", obs: "" },
      { ex: "Rotação de tronco com elástico", series: "3x15", obs: "Mobilidade para corrida" },
      { ex: "Elevação de quadril unilateral", series: "3x15 cada", obs: "Previne lesão de joelho" },
      { ex: "Alongamento dinâmico 15min", series: "—", obs: "Quadríceps, isquio, panturrilha" },
    ]
  }
];

const FINANCEIRO = [
  { mes: "Jun", valor: 200, total: 200, obs: "Primeiro aporte" },
  { mes: "Jul", valor: 200, total: 400, obs: "" },
  { mes: "Ago", valor: 200, total: 600, obs: "" },
  { mes: "Set", valor: 200, total: 800, obs: "" },
  { mes: "Out", valor: 200, total: 1000, obs: "" },
  { mes: "Nov", valor: 199, total: 1199, obs: "🛍️ COMPRA DO TÊNIS ON" },
];

const DIAS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const DAY_KEYS = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"];

export default function App() {
  const [tab, setTab] = useState("treinos");
  const [openPhase, setOpenPhase] = useState("fase1");
  const [openTreino, setOpenTreino] = useState(0);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#F7F9F7", minHeight: "100vh", color: "#1a2e1a" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)", color: "#fff", padding: "32px 24px 24px", textAlign: "center" }}>
        <div style={{ fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: "#95D5B2", marginBottom: 8 }}>Sua jornada</div>
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, lineHeight: 1.2 }}>Meia Maratona do Rio 2027</h1>
        <p style={{ margin: "8px 0 0", color: "#B7E4C7", fontSize: 14 }}>29 de maio de 2027 · Leblon → Aterro do Flamengo · 21,097km</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 20 }}>
          {[
            { label: "Início", val: "15 Jun 2026" },
            { label: "Tênis ON", val: "01 Nov 2026" },
            { label: "Prova", val: "29 Mai 2027" },
          ].map(item => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{item.val}</div>
              <div style={{ fontSize: 11, color: "#95D5B2" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", background: "#fff", borderBottom: "2px solid #e0ebe0" }}>
        {[
          { id: "treinos", label: "📅 Planilha de Treinos" },
          { id: "forca", label: "💪 Treinos de Força" },
          { id: "financeiro", label: "💰 Planejamento Tênis" },
          { id: "dicas", label: "🚭 Dicas & Saúde" },
        ].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{
              flex: 1, padding: "14px 4px", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600,
              background: tab === t.id ? "#1B4332" : "#fff",
              color: tab === t.id ? "#fff" : "#555",
              borderBottom: tab === t.id ? "3px solid #52B788" : "none",
              transition: "all 0.2s"
            }}>
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 16px" }}>

        {/* ABA: Planilha de Treinos */}
        {tab === "treinos" && (
          <div>
            <p style={{ color: "#555", fontSize: 14, margin: "0 0 16px" }}>
              Plano de <strong>15/Jun/2026 a 01/Nov/2026</strong> — 3 fases progressivas com treinos de academia e corrida. Gradual para quem está voltando e ainda fuma.
            </p>
            {PHASES.map(phase => (
              <div key={phase.id} style={{ marginBottom: 16, borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                <button
                  onClick={() => setOpenPhase(openPhase === phase.id ? null : phase.id)}
                  style={{
                    width: "100%", background: phase.color, color: "#fff", border: "none",
                    padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer"
                  }}>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontSize: 11, letterSpacing: 2, opacity: 0.8 }}>{phase.label} · {phase.period}</div>
                    <div style={{ fontSize: 17, fontWeight: 800 }}>{phase.subtitle}</div>
                  </div>
                  <span style={{ fontSize: 20 }}>{openPhase === phase.id ? "▲" : "▼"}</span>
                </button>
                {openPhase === phase.id && (
                  <div style={{ background: "#fff" }}>
                    {phase.weeks.map(week => (
                      <div key={week.n} style={{ borderBottom: "1px solid #f0f0f0" }}>
                        <div style={{ background: phase.bg, padding: "8px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontWeight: 700, fontSize: 13, color: phase.color }}>Semana {week.n} — {week.dates}</span>
                          {week.label && <span style={{ fontSize: 11, background: "#fff", color: phase.color, borderRadius: 6, padding: "2px 8px", fontWeight: 700 }}>{week.label}</span>}
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(100px, 1fr))", fontSize: 11, overflowX: "auto" }}>
                          {DIAS.map((dia, i) => {
                            const key = DAY_KEYS[i];
                            const val = week[key];
                            const isRest = val?.toLowerCase().includes("repouso");
                            const isForca = val?.toLowerCase().includes("força");
                            const isCorrida = val?.toLowerCase().includes("corrida") || val?.toLowerCase().includes("trote") || val?.toLowerCase().includes("fartlek") || val?.toLowerCase().includes("intervalado") || val?.toLowerCase().includes("tempo run");
                            return (
                              <div key={dia} style={{
                                padding: "8px 6px", borderRight: i < 6 ? "1px solid #f5f5f5" : "none",
                                background: isRest ? "#fafafa" : isForca ? "#e8f4fd" : isCorrida ? "#e8f5e9" : "#fff",
                                minHeight: 64
                              }}>
                                <div style={{ fontWeight: 700, color: "#888", marginBottom: 4 }}>{dia}</div>
                                <div style={{ color: isRest ? "#bbb" : isForca ? "#1976D2" : isCorrida ? "#2D6A4F" : "#333", lineHeight: 1.3 }}>{val}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ background: "#fff", borderRadius: 12, padding: 16, marginTop: 8, fontSize: 12, color: "#666", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>Legenda de cores</div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <span><span style={{ display: "inline-block", width: 12, height: 12, background: "#e8f4fd", borderRadius: 2, marginRight: 4 }}></span>Força (academia)</span>
                <span><span style={{ display: "inline-block", width: 12, height: 12, background: "#e8f5e9", borderRadius: 2, marginRight: 4 }}></span>Corrida/Aeróbico</span>
                <span><span style={{ display: "inline-block", width: 12, height: 12, background: "#fafafa", borderRadius: 2, marginRight: 4 }}></span>Repouso</span>
              </div>
            </div>
          </div>
        )}

        {/* ABA: Treinos de Força */}
        {tab === "forca" && (
          <div>
            <p style={{ color: "#555", fontSize: 14, margin: "0 0 16px" }}>
              Dois treinos rotativos na academia. Use o tênis de academia que você já tem. Foco em fortalecer os grupos musculares que sustentam a corrida.
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              {TREINOS.map((t, i) => (
                <button key={i} onClick={() => setOpenTreino(i)}
                  style={{
                    flex: 1, padding: "12px 8px", borderRadius: 10, border: "none", cursor: "pointer",
                    background: openTreino === i ? "#1B4332" : "#e8f5e9",
                    color: openTreino === i ? "#fff" : "#1B4332",
                    fontWeight: 700, fontSize: 13
                  }}>
                  {i === 0 ? "TREINO A" : "TREINO B"}
                  <div style={{ fontSize: 11, fontWeight: 400, opacity: 0.8, marginTop: 2 }}>{t.foco}</div>
                </button>
              ))}
            </div>
            {TREINOS[openTreino] && (
              <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                <div style={{ background: "#1B4332", color: "#fff", padding: "16px 20px" }}>
                  <div style={{ fontWeight: 800, fontSize: 16 }}>{TREINOS[openTreino].nome}</div>
                  <div style={{ fontSize: 12, color: "#95D5B2", marginTop: 2 }}>Foco: {TREINOS[openTreino].foco}</div>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                  <thead>
                    <tr style={{ background: "#f0f7f0" }}>
                      <th style={{ padding: "10px 16px", textAlign: "left", color: "#444", fontWeight: 700 }}>Exercício</th>
                      <th style={{ padding: "10px 12px", textAlign: "center", color: "#444", fontWeight: 700, whiteSpace: "nowrap" }}>Séries</th>
                      <th style={{ padding: "10px 12px", textAlign: "left", color: "#444", fontWeight: 700 }}>Observação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TREINOS[openTreino].exercicios.map((ex, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #f5f5f5", background: i % 2 === 0 ? "#fff" : "#fafffe" }}>
                        <td style={{ padding: "10px 16px", fontWeight: 600 }}>{ex.ex}</td>
                        <td style={{ padding: "10px 12px", textAlign: "center", color: "#2D6A4F", fontWeight: 700, whiteSpace: "nowrap" }}>{ex.series}</td>
                        <td style={{ padding: "10px 12px", color: "#777", fontSize: 12 }}>{ex.obs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ padding: 16, fontSize: 12, color: "#888", background: "#fafffe" }}>
                  💡 Descanso entre séries: 60–90s. Aumente a carga quando conseguir fazer todas as reps com boa forma.
                </div>
              </div>
            )}
            <div style={{ background: "#fff", borderRadius: 12, padding: 16, marginTop: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, color: "#1B4332" }}>📐 Como usar os dois tênis</div>
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.7 }}>
                <strong>Tênis de corrida atual:</strong> use nos treinos de corrida (trote, fartlek, intervalado) até novembro, mesmo que seja em academia/esteira nas primeiras semanas.
                <br /><br />
                <strong>Tênis de academia:</strong> use exclusivamente nos treinos de força A e B. Isso preserva a sola do tênis de corrida e dá mais estabilidade nos exercícios com carga.
              </div>
            </div>
          </div>
        )}

        {/* ABA: Planejamento Financeiro */}
        {tab === "financeiro" && (
          <div>
            <div style={{ background: "#1B4332", color: "#fff", borderRadius: 14, padding: "20px", marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: "#95D5B2", letterSpacing: 2, textTransform: "uppercase" }}>Meta de Compra</div>
              <div style={{ fontSize: 28, fontWeight: 800, margin: "6px 0 4px" }}>On Cloudsurfer 2</div>
              <div style={{ fontSize: 14, color: "#B7E4C7" }}>O modelo indicado para corridas longas e meia maratonas</div>
              <div style={{ marginTop: 16, display: "flex", gap: 20 }}>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#52B788" }}>R$ 1.199</div>
                  <div style={{ fontSize: 11, color: "#95D5B2" }}>Preço oficial On Brasil</div>
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#52B788" }}>R$ 200/mês</div>
                  <div style={{ fontSize: 11, color: "#95D5B2" }}>Economia mensal (Jun–Out)</div>
                </div>
              </div>
            </div>

            <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: 16 }}>
              <div style={{ padding: "14px 16px", borderBottom: "1px solid #f0f0f0", fontWeight: 700, color: "#1B4332" }}>Cronograma de Poupança</div>
              {FINANCEIRO.map((row, i) => {
                const pct = Math.round((row.total / 1199) * 100);
                return (
                  <div key={i} style={{ padding: "14px 16px", borderBottom: "1px solid #f9f9f9", display: "flex", alignItems: "center", gap: 12, background: row.obs.includes("COMPRA") ? "#e8f5e9" : "#fff" }}>
                    <div style={{ width: 40, fontWeight: 700, color: row.obs.includes("COMPRA") ? "#1B4332" : "#555" }}>{row.mes}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ height: 8, background: "#f0f0f0", borderRadius: 4, overflow: "hidden" }}>
                        <div style={{ width: `${pct}%`, height: "100%", background: row.obs.includes("COMPRA") ? "#52B788" : "#2D6A4F", borderRadius: 4, transition: "width 0.5s" }}></div>
                      </div>
                    </div>
                    <div style={{ width: 80, textAlign: "right" }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: row.obs.includes("COMPRA") ? "#1B4332" : "#333" }}>R$ {row.total}</div>
                      <div style={{ fontSize: 11, color: "#888" }}>{pct}% da meta</div>
                    </div>
                    {row.obs && <div style={{ fontSize: 12, color: "#2D6A4F", fontWeight: 700 }}>{row.obs}</div>}
                  </div>
                );
              })}
            </div>

            <div style={{ background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, color: "#1B4332" }}>🛍️ Por que o Cloudsurfer 2?</div>
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>
                • <strong>CloudTec Phase™</strong> — amortecimento que ativa na aterrissagem, ideal para longas distâncias<br />
                • <strong>Espuma Helion™</strong> — macia e responsiva, reduz fadiga em treinos longos<br />
                • <strong>Indicado para meia maratonas</strong> pela própria On (10km às meias)<br />
                • <strong>Cabedal respirável</strong> — importante no calor do Rio<br />
                • <strong>251g</strong> — leve sem abrir mão do amortecimento
              </div>
            </div>

            <div style={{ background: "#FFF3CD", borderRadius: 12, padding: 16, fontSize: 13, color: "#856404" }}>
              <strong>💡 Dica de compra:</strong> Compre direto no <strong>on.com/pt-br</strong> — frete grátis e devolução em 30 dias. Evite revendedores não oficiais. Se possível, experimente numa loja física On antes de comprar online para confirmar o tamanho (o modelo é fiel ao tamanho, mas valha a conferência).
            </div>
          </div>
        )}

        {/* ABA: Dicas & Saúde */}
        {tab === "dicas" && (
          <div>
            <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <div style={{ fontWeight: 800, fontSize: 16, color: "#1B4332", marginBottom: 12 }}>🚭 Cigarro & Corrida — Como conciliar</div>
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.85 }}>
                Fumar reduz a capacidade pulmonar e o transporte de oxigênio — mas não inviabiliza o treino. Muitos corredores usaram o treinamento progressivo como motivação para parar.
                <br /><br />
                <strong>Estratégias práticas:</strong><br />
                • Não fume nas 2h antes do treino<br />
                • Evite fumar nas 2h após o treino (o corpo está em recuperação)<br />
                • Hidrate muito mais — o cigarro desidrata<br />
                • Acumule dias sem fumar progressivamente<br />
                • Fale com seu médico sobre estratégias de cessação — o aumento de atividade física ajuda muito no processo
                <br /><br />
                <em>O ritmo de 6:20–6:40 min/km para a meia maratona é plenamente alcançável, mas ficará mais fácil a cada semana que você reduzir o tabagismo.</em>
              </div>
            </div>

            <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <div style={{ fontWeight: 800, fontSize: 16, color: "#1B4332", marginBottom: 12 }}>📊 Seu perfil de corredor</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 13 }}>
                {[
                  { label: "Peso", val: "68 kg" },
                  { label: "Altura", val: "1,66 m" },
                  { label: "IMC", val: "24,7 ✅" },
                  { label: "Idade", val: "33 anos" },
                  { label: "Pace anterior", val: "6:12 min/km" },
                  { label: "Meta 21km", val: "~2h15–2h20" },
                ].map(item => (
                  <div key={item.label} style={{ background: "#f0f7f0", borderRadius: 8, padding: "10px 14px" }}>
                    <div style={{ color: "#888", fontSize: 11 }}>{item.label}</div>
                    <div style={{ fontWeight: 700, color: "#1B4332", fontSize: 15 }}>{item.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <div style={{ fontWeight: 800, fontSize: 16, color: "#1B4332", marginBottom: 12 }}>⚠️ Sinais de alerta — Pare e descanse se:</div>
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.85 }}>
                • Dor articular (joelho, tornozelo, quadril) — não é dor muscular normal<br />
                • Falta de ar desproporcional que não melhora ao reduzir o ritmo<br />
                • Dor no peito ou palpitações<br />
                • Tontura ou enjoo durante o esforço<br /><br />
                <strong>Importante:</strong> Antes de iniciar o programa, consulte um médico e faça um check-up cardiovascular básico — especialmente por ser fumante e estar voltando ao treinamento.
              </div>
            </div>

            <div style={{ background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <div style={{ fontWeight: 800, fontSize: 16, color: "#1B4332", marginBottom: 12 }}>🗓️ Próximos marcos importantes</div>
              {[
                { data: "15 Jun 2026", ev: "Início do plano — Fase 1", color: "#2D6A4F" },
                { data: "01 Nov 2026", ev: "Compra do tênis On Cloudsurfer 2 🎉", color: "#52B788" },
                { data: "Nov 2026", ev: "Início dos treinos de rua com o tênis novo", color: "#40916C" },
                { data: "Nov–Dez 2026", ev: "Inscrição na Meia Maratona do Rio 2027 (fique atento ao sorteio!)", color: "#1B4332" },
                { data: "29 Mai 2027", ev: "🏅 MEIA MARATONA DO RIO — 21km", color: "#081C15" },
              ].map((m, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: m.color, marginTop: 4, flexShrink: 0 }}></div>
                  <div>
                    <div style={{ fontSize: 11, color: "#888" }}>{m.data}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{m.ev}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 12, padding: 12, background: "#FFF3CD", borderRadius: 8, fontSize: 12, color: "#856404" }}>
                ⚡ <strong>Atenção para a inscrição:</strong> A Meia Maratona do Rio usa sistema de sorteio desde 2026. Acompanhe o @maratonadoriooficial no Instagram para não perder as datas de cadastro (geralmente novembro/dezembro).
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
