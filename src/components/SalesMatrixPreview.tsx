import React, { useState } from 'react';

type TabView = 'pnl' | 'pivot' | 'briefing';
type Quarter = 'Q1 FY26' | 'Q2 FY26' | 'Q3 FY26' | 'Q4 FY26';

interface QuarterData {
  revenue: string;
  margin: string;
  ebitda: string;
  rows: {
    line: string;
    units: string;
    asp: string;
    revenue: string;
    margin: string;
  }[];
  briefing: string;
  riskFlag: string;
}

const QUARTER_DATA: Record<Quarter, QuarterData> = {
  'Q1 FY26': {
    revenue: '$1,280,450',
    margin: '76.8%',
    ebitda: '$384,120',
    rows: [
      { line: 'Enterprise Multi-Seat SaaS', units: '142', asp: '$4,200', revenue: '$596,400', margin: '82%' },
      { line: 'High-Throughput Cloud Compute', units: '3,840 hrs', asp: '$98/h', revenue: '$376,320', margin: '74%' },
      { line: 'Gemini Copilot Add-on Tier', units: '512', asp: '$600', revenue: '$307,730', margin: '71%' },
    ],
    briefing: 'Q1 Performance: Enterprise multi-seat expansion drove 46.5% of gross revenue. Churn across tier-1 accounts remained flat at 0.8%.',
    riskFlag: 'Low churn variance across enterprise tiers.',
  },
  'Q2 FY26': {
    revenue: '$1,540,800',
    margin: '79.2%',
    ebitda: '$492,600',
    rows: [
      { line: 'Enterprise Multi-Seat SaaS', units: '168', asp: '$4,400', revenue: '$739,200', margin: '83%' },
      { line: 'High-Throughput Cloud Compute', units: '4,450 hrs', asp: '$102/h', revenue: '$453,900', margin: '76%' },
      { line: 'Gemini Copilot Add-on Tier', units: '580', asp: '$600', revenue: '$347,700', margin: '73%' },
    ],
    briefing: 'Q2 Performance: Cloud compute workloads surged +20.6% QoQ driven by mid-market batch processing pipelines.',
    riskFlag: 'Cloud compute margin expansion (+200 bps).',
  },
  'Q3 FY26': {
    revenue: '$1,894,300',
    margin: '81.4%',
    ebitda: '$642,100',
    rows: [
      { line: 'Enterprise Multi-Seat SaaS', units: '194', asp: '$4,600', revenue: '$892,400', margin: '84%' },
      { line: 'High-Throughput Cloud Compute', units: '5,600 hrs', asp: '$105/h', revenue: '$588,000', margin: '79%' },
      { line: 'Gemini Copilot Add-on Tier', units: '690', asp: '$600', revenue: '$413,900', margin: '77%' },
    ],
    briefing: 'Q3 Performance: C-Suite AI Briefing engine achieved 98.4% executive adoption with sub-180ms in-memory aggregation across 10,000+ transaction lines.',
    riskFlag: 'Net retention rate climbed to 118%.',
  },
  'Q4 FY26': {
    revenue: '$2,310,000',
    margin: '82.6%',
    ebitda: '$815,400',
    rows: [
      { line: 'Enterprise Multi-Seat SaaS', units: '230', asp: '$4,800', revenue: '$1,104,000', margin: '85%' },
      { line: 'High-Throughput Cloud Compute', units: '6,800 hrs', asp: '$110/h', revenue: '$748,000', margin: '81%' },
      { line: 'Gemini Copilot Add-on Tier', units: '763', asp: '$600', revenue: '$457,800', margin: '79%' },
    ],
    briefing: 'Q4 Forecast: Full-year operating revenue crosses $7.0M mark with EBITDA margins stabilizing at 35.3% of top-line.',
    riskFlag: 'Capacity expansion required for EU region in Q1.',
  },
};

export const SalesMatrixPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabView>('pnl');
  const [selectedQuarter, setSelectedQuarter] = useState<Quarter>('Q3 FY26');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const current = QUARTER_DATA[selectedQuarter];

  const handleQuarterChange = (q: Quarter) => {
    setIsRefreshing(true);
    setSelectedQuarter(q);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 150);
  };

  return (
    <div className="interactive-preview-box">
      {/* Top Bar Controls */}
      <div className="preview-topbar">
        <div className="preview-title-wrap">
          <span className="preview-dot" aria-hidden="true"></span>
          <span className="preview-topbar-title">Live OLAP Engine Sandbox</span>
        </div>

        <div className="preview-tabs" role="tablist">
          <button
            type="button"
            className={`preview-tab-btn ${activeTab === 'pnl' ? 'active' : ''}`}
            onClick={() => setActiveTab('pnl')}
            role="tab"
            aria-selected={activeTab === 'pnl'}
          >
            P&amp;L View
          </button>
          <button
            type="button"
            className={`preview-tab-btn ${activeTab === 'pivot' ? 'active' : ''}`}
            onClick={() => setActiveTab('pivot')}
            role="tab"
            aria-selected={activeTab === 'pivot'}
          >
            Dynamic Pivot
          </button>
          <button
            type="button"
            className={`preview-tab-btn ${activeTab === 'briefing' ? 'active' : ''}`}
            onClick={() => setActiveTab('briefing')}
            role="tab"
            aria-selected={activeTab === 'briefing'}
          >
            AI Briefing
          </button>
        </div>
      </div>

      {/* Body Area */}
      <div className="preview-body">
        {/* Interactive Period Filter Segment */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Dataset Period:
          </span>
          <div style={{ display: 'flex', gap: '4px' }}>
            {(['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26'] as Quarter[]).map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => handleQuarterChange(q)}
                style={{
                  padding: '4px 8px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: selectedQuarter === q ? 'var(--accent-bronze)' : 'var(--border-subtle)',
                  backgroundColor: selectedQuarter === q ? 'rgba(212, 163, 115, 0.15)' : 'transparent',
                  color: selectedQuarter === q ? 'var(--accent-bronze)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: selectedQuarter === q ? 600 : 400,
                  transition: 'all 0.15s ease',
                }}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: P&L Summary */}
        {activeTab === 'pnl' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', opacity: isRefreshing ? 0.6 : 1, transition: 'opacity 0.15s' }}>
            <div className="preview-kpi-row">
              <div className="preview-mini-kpi">
                <p className="mini-kpi-lbl">Quarter Revenue</p>
                <p className="mini-kpi-num tabular-nums">{current.revenue}</p>
                <p className="mini-kpi-trend">↑ +18.4% QoQ</p>
              </div>
              <div className="preview-mini-kpi">
                <p className="mini-kpi-lbl">Gross Margin</p>
                <p className="mini-kpi-num tabular-nums">{current.margin}</p>
                <p className="mini-kpi-trend">Target: &gt;75%</p>
              </div>
              <div className="preview-mini-kpi">
                <p className="mini-kpi-lbl">Net EBITDA</p>
                <p className="mini-kpi-num tabular-nums">{current.ebitda}</p>
                <p className="mini-kpi-trend">33.9% margin</p>
              </div>
            </div>

            <div style={{ padding: '10px 14px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Calculation Latency:</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-bronze)', fontWeight: 600 }}>
                ⚡ 142ms via In-Memory Web Worker
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Dynamic Pivot */}
        {activeTab === 'pivot' && (
          <div className="pivot-table-wrap" style={{ opacity: isRefreshing ? 0.6 : 1, transition: 'opacity 0.15s' }}>
            <table className="pivot-table">
              <thead>
                <tr>
                  <th>Product Stream</th>
                  <th style={{ textAlign: 'right' }}>Units</th>
                  <th style={{ textAlign: 'right' }}>ASP</th>
                  <th style={{ textAlign: 'right' }}>Gross Net</th>
                  <th style={{ textAlign: 'right' }}>Margin</th>
                </tr>
              </thead>
              <tbody>
                {current.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{row.line}</td>
                    <td className="num">{row.units}</td>
                    <td className="num">{row.asp}</td>
                    <td className="num">{row.revenue}</td>
                    <td className="num" style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>{row.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: Gemini AI Briefing */}
        {activeTab === 'briefing' && (
          <div className="ai-briefing-panel" style={{ opacity: isRefreshing ? 0.6 : 1, transition: 'opacity 0.15s' }}>
            <div className="ai-briefing-header">
              <span className="ai-tag-line">Gemini Financial Intelligence</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                Model: Gemini Flash · Structured JSON
              </span>
            </div>
            <p className="ai-briefing-text">
              &ldquo;{current.briefing}&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--accent-bronze)', marginTop: '4px' }}>
              <span>✦</span>
              <span><strong>Key Signal:</strong> {current.riskFlag}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
