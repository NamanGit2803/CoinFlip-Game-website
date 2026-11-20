import { useState } from "react";
import {
  ArrowDownUp,
  CircleHelp,
  Coins,
  History,
  Info,
  Minus,
  Plus,
  Sparkles,
  Trophy,
  Wallet,
  Zap,
} from "lucide-react";

const QUICK_STAKES = [10, 25, 50, 100];

const RECENT_RESULTS = [
  { result: "H", win: true },
  { result: "T", win: false },
  { result: "H", win: true },
  { result: "T", win: false },
  { result: "T", win: false },
  { result: "H", win: true },
  { result: "H", win: true },
  { result: "T", win: false },
];

export default function GamePage() {
  const [selectedSide, setSelectedSide] = useState("heads");
  const [stake, setStake] = useState(25);
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState(null);

  const potentialReturn = stake * 2;

  function updateStake(value) {
    const nextValue = Number(value);

    if (!Number.isFinite(nextValue)) return;

    setStake(Math.min(1000, Math.max(10, nextValue)));
    setResult(null);
  }

  function handleFlip() {
    if (isFlipping) return;

    setResult(null);
    setIsFlipping(true);

    // Temporary UI preview only.
    // The production game result will come from the backend.
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? "heads" : "tails";
      setResult({
        outcome,
        won: outcome === selectedSide,
      });
      setIsFlipping(false);
    }, 1800);
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      {/* Page heading */}
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_#39e9a6]" />
            Live game arena
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Coin Flip <span className="text-primary">Arena</span>
          </h1>
          <p className="mt-1 text-sm text-white/45">
            Choose your side. Make your prediction.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-surface px-4 py-3">
          <Wallet className="h-5 w-5 text-primary" />
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/40">
              Demo balance
            </p>
            <p className="font-bold tabular-nums text-white">
              1,250 <span className="text-xs text-primary">CR</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main game grid */}
      <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
        {/* Game arena */}
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-surface">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Zap className="h-4 w-4 text-primary" />
              Single player
            </div>
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
              Demo mode
            </span>
          </div>

          <div className="px-4 py-8 sm:px-8 sm:py-10">
            {/* Odds */}
            <div className="mx-auto mb-8 flex max-w-sm items-center justify-center gap-3">
              <div className="flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-center">
                <p className="text-xs text-white/40">Heads</p>
                <p className="mt-1 text-xl font-bold text-white">50%</p>
              </div>
              <div className="text-xs font-bold text-white/20">VS</div>
              <div className="flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-center">
                <p className="text-xs text-white/40">Tails</p>
                <p className="mt-1 text-xl font-bold text-white">50%</p>
              </div>
            </div>

            {/* Coin */}
            <div className="relative mx-auto flex h-52 w-full max-w-sm items-center justify-center sm:h-60">
              <div className="absolute h-40 w-40 rounded-full bg-primary/10 blur-3xl sm:h-48 sm:w-48" />

              <div
                className={`relative flex h-36 w-36 items-center justify-center rounded-full border-[7px] border-[#b98b2d] bg-gradient-to-br from-[#ffe8a1] via-[#d4af37] to-[#8e641b] shadow-[0_0_45px_rgba(212,175,55,0.22),inset_0_2px_8px_rgba(255,255,255,0.5)] sm:h-40 sm:w-40 ${
                  isFlipping ? "animate-coin-flip" : ""
                }`}
              >
                <div className="flex h-[calc(100%-14px)] w-[calc(100%-14px)] items-center justify-center rounded-full border border-[#fff0bd]/60">
                  <div className="text-center text-[#49330b]">
                    <Coins className="mx-auto mb-1 h-10 w-10" />
                    <span className="text-sm font-black uppercase tracking-[0.2em]">
                      {isFlipping
                        ? "FLIP"
                        : result
                          ? result.outcome
                          : "FLIPX"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Result message */}
            <div className="mb-7 min-h-10 text-center">
              {isFlipping ? (
                <p className="text-sm font-medium text-primary">
                  The coin is flipping...
                </p>
              ) : result ? (
                <p
                  className={`text-sm font-semibold ${
                    result.won ? "text-primary" : "text-danger"
                  }`}
                >
                  {result.won
                    ? "You won this demo round!"
                    : "You lost this demo round."}
                </p>
              ) : (
                <p className="text-sm text-white/40">
                  Select your prediction to get started
                </p>
              )}
            </div>

            {/* Side selection */}
            <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
              <button
                type="button"
                disabled={isFlipping}
                onClick={() => {
                  setSelectedSide("heads");
                  setResult(null);
                }}
                className={`rounded-xl border px-4 py-4 text-left transition ${
                  selectedSide === "heads"
                    ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(57,233,166,0.08)]"
                    : "border-white/10 bg-black/20 hover:border-white/20"
                }`}
              >
                <span className="block text-xs text-white/40">01</span>
                <span className="mt-1 block font-bold text-white">Heads</span>
                <span className="mt-1 block text-xs text-white/40">
                  Choose heads
                </span>
              </button>

              <button
                type="button"
                disabled={isFlipping}
                onClick={() => {
                  setSelectedSide("tails");
                  setResult(null);
                }}
                className={`rounded-xl border px-4 py-4 text-left transition ${
                  selectedSide === "tails"
                    ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(57,233,166,0.08)]"
                    : "border-white/10 bg-black/20 hover:border-white/20"
                }`}
              >
                <span className="block text-xs text-white/40">02</span>
                <span className="mt-1 block font-bold text-white">Tails</span>
                <span className="mt-1 block text-xs text-white/40">
                  Choose tails
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Bet controls */}
        <aside className="space-y-5">
          <section className="rounded-3xl border border-white/10 bg-surface p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-bold text-white">Your prediction</h2>
              <CircleHelp className="h-4 w-4 text-white/30" />
            </div>

            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs text-white/45">Selected side</label>
                <span className="text-xs font-bold capitalize text-primary">
                  {selectedSide}
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-semibold capitalize text-white">
                {selectedSide}
              </div>
            </div>

            <div className="mb-3 flex items-center justify-between">
              <label className="text-xs text-white/45">Demo stake</label>
              <span className="text-xs text-white/40">10–1,000 CR</span>
            </div>

            <div className="mb-4 flex items-center gap-2">
              <button
                type="button"
                disabled={isFlipping}
                onClick={() => updateStake(stake - 10)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 text-white hover:bg-white/5 disabled:opacity-40"
                aria-label="Decrease stake"
              >
                <Minus className="h-4 w-4" />
              </button>

              <input
                type="number"
                min="10"
                max="1000"
                step="5"
                value={stake}
                disabled={isFlipping}
                onChange={(event) => updateStake(event.target.value)}
                className="h-11 min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 text-center font-bold text-white outline-none focus:border-primary"
              />

              <button
                type="button"
                disabled={isFlipping}
                onClick={() => updateStake(stake + 10)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 text-white hover:bg-white/5 disabled:opacity-40"
                aria-label="Increase stake"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <div className="mb-6 grid grid-cols-4 gap-2">
              {QUICK_STAKES.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  disabled={isFlipping}
                  onClick={() => updateStake(amount)}
                  className={`rounded-lg border py-2 text-xs font-semibold transition ${
                    stake === amount
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-white/10 bg-black/20 text-white/55 hover:border-white/20"
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>

            <div className="mb-5 rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center justify-between text-xs text-white/45">
                <span>Potential return</span>
                <ArrowDownUp className="h-3.5 w-3.5" />
              </div>
              <p className="mt-2 text-2xl font-bold tabular-nums text-primary">
                {potentialReturn.toLocaleString("en-IN")} CR
              </p>
              <p className="mt-1 text-[10px] text-white/30">
                Illustrative 2× demo payout
              </p>
            </div>

            <button
              type="button"
              disabled={isFlipping}
              onClick={handleFlip}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 font-bold text-[#07140f] shadow-[0_0_25px_rgba(57,233,166,0.12)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Sparkles className="h-5 w-5" />
              {isFlipping ? "Flipping..." : "Flip the coin"}
            </button>

            <p className="mt-3 text-center text-[10px] leading-relaxed text-white/30">
              Frontend demo only. No real credits are deducted or awarded.
            </p>
          </section>

          {/* Recent history */}
          <section className="rounded-3xl border border-white/10 bg-surface p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <History className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-bold text-white">Recent results</h2>
              </div>
              <span className="text-[10px] text-white/35">SAMPLE DATA</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {RECENT_RESULTS.map((item, index) => (
                <div
                  key={index}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold ${
                    item.win
                      ? "border-primary/30 bg-primary/10 text-primary"
                      : "border-danger/30 bg-danger/10 text-danger"
                  }`}
                >
                  {item.result}
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>

      {/* Demo notice */}
      <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
        <p className="text-xs leading-relaxed text-white/40">
          FLIPX is currently running a frontend demonstration. Game outcomes,
          balances, and history are not stored or verified by a server.
        </p>
      </div>
    </main>
  );
}
