import React, { useState } from 'react';
import { TELEMETRY_CARDS } from '../data/portfolioData';

export const TelemetryTerminal: React.FC = () => {
  const [activeCommand, setActiveCommand] = useState<string>('order-lock');
  const [isExecuting, setIsExecuting] = useState<boolean>(false);

  const commandOutputs: Record<string, { cmd: string; out1: string; out2: string }> = {
    'order-lock': {
      cmd: 'run-qa-matrix --target /checkout/order-lock',
      out1: '> [OK] Concurrency Mutex Acquired: 200 OK',
      out2: '> [TRACE] BRD-REQ-042 validated across 4 test specs',
    },
    'prophet-pipeline': {
      cmd: 'eval-prophet-forecast --horizon 7d --branch steam-utama',
      out1: '> [OK] RMSE Deviation: 2.14% (Acceptable < 5%)',
      out2: '> [TRACE] Automated weekly revenue projection dispatched',
    },
    'jwt-boundary': {
      cmd: 'verify-security --spec jwt-rbac --target /api/v1/wash-bays',
      out1: '> [OK] Unauthorized access denied (403 Forbidden)',
      out2: '> [TRACE] Supabase RLS policy isolation confirmed',
    },
  };

  const currentLog = commandOutputs[activeCommand] || commandOutputs['order-lock'];

  const triggerCommand = (key: string) => {
    setIsExecuting(true);
    setActiveCommand(key);
    setTimeout(() => {
      setIsExecuting(false);
    }, 400);
  };

  return (
    <div className="relative rounded-2xl bg-surface-container-low/80 border border-outline-variant/30 backdrop-blur-2xl p-space-lg shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Top Window Chrome */}
      <div className="flex items-center justify-between pb-space-md border-b border-outline-variant/20">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-error/80 inline-block shadow-sm"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm"></span>
          <span className="w-3 h-3 rounded-full bg-secondary/80 inline-block shadow-sm"></span>
          <span className="font-label-sm text-label-sm text-on-surface-variant ml-2 font-mono">
            reza-telemetry-node:active
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/10 border border-secondary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
          <span className="font-label-sm text-label-sm text-secondary font-mono">STABLE</span>
        </div>
      </div>

      {/* Console Feed & Metric Stream */}
      <div className="py-space-md space-y-space-md font-mono text-body-sm text-body-sm">
        <div className="space-y-1">
          <div className="flex justify-between text-on-surface-variant text-xs">
            <span>[TEST_RUNNER]: Playwright_Engine</span>
            <span className="text-secondary font-semibold">SUITE PASS</span>
          </div>
          <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-1000"
              style={{ width: '98.4%' }}
            ></div>
          </div>
          <div className="flex justify-between text-[11px] text-outline">
            <span>64 Executed Assertions</span>
            <span>0 Flaky Scenarios</span>
          </div>
        </div>

        {/* Discipline Grid Inside Terminal */}
        <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
          {TELEMETRY_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-surface-container/70 border border-outline-variant/20 hover:border-outline-variant/40 transition-colors"
            >
              <span className="text-[10px] text-on-surface-variant block uppercase tracking-wider">
                {card.category}
              </span>
              <span className="text-on-surface font-semibold text-[13px] block mt-0.5">
                {card.title}
              </span>
              <span className={`text-[11px] ${card.color} block mt-1`}>
                {card.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Command Presets */}
        <div className="flex items-center gap-1.5 pt-1 overflow-x-auto text-[10px]">
          <span className="text-outline shrink-0 font-sans">Run verification:</span>
          <button
            onClick={() => triggerCommand('order-lock')}
            className={`px-2 py-0.5 rounded border transition-colors ${
              activeCommand === 'order-lock'
                ? 'bg-secondary/20 border-secondary/40 text-secondary'
                : 'bg-surface-container border-outline-variant/20 text-on-surface-variant hover:text-on-surface'
            }`}
          >
            order-lock
          </button>
          <button
            onClick={() => triggerCommand('prophet-pipeline')}
            className={`px-2 py-0.5 rounded border transition-colors ${
              activeCommand === 'prophet-pipeline'
                ? 'bg-primary/20 border-primary/40 text-primary'
                : 'bg-surface-container border-outline-variant/20 text-on-surface-variant hover:text-on-surface'
            }`}
          >
            prophet-ml
          </button>
          <button
            onClick={() => triggerCommand('jwt-boundary')}
            className={`px-2 py-0.5 rounded border transition-colors ${
              activeCommand === 'jwt-boundary'
                ? 'bg-secondary/20 border-secondary/40 text-secondary'
                : 'bg-surface-container border-outline-variant/20 text-on-surface-variant hover:text-on-surface'
            }`}
          >
            jwt-security
          </button>
        </div>

        {/* Terminal Code Output Preview */}
        <div
          className={`p-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant/15 text-[12px] space-y-1 transition-opacity duration-200 ${
            isExecuting ? 'opacity-50' : 'opacity-100'
          }`}
        >
          <div className="text-outline-variant text-[11px]">-- System Boundary Verification --</div>
          <div className="text-on-surface-variant flex items-center gap-1">
            <span className="text-secondary">$</span>
            <span className="truncate">{currentLog.cmd}</span>
          </div>
          <div className="text-secondary text-[11.5px]">{currentLog.out1}</div>
          <div className="text-primary text-[11.5px]">{currentLog.out2}</div>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="pt-space-sm border-t border-outline-variant/20 flex items-center justify-between text-body-sm text-outline">
        <span className="flex items-center gap-1 font-mono text-[11px]">
          <span className="material-symbols-outlined text-[14px] text-secondary">verified</span>
          Gunadarma University CompSci
        </span>
        <span className="font-mono text-[11px] text-primary">v2.4.0-stable</span>
      </div>
    </div>
  );
};
