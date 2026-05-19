"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { SEARCH_QUICK_LINKS } from "@/lib/constants";

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function SearchDialog({ open, onClose }: SearchDialogProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    const match = SEARCH_QUICK_LINKS.find(
      (l) => l.label.toLowerCase().includes(q) || l.hint.toLowerCase().includes(q),
    );
    onClose();
    setQuery("");
    router.push(match?.href ?? `/universe?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <Modal open={open} onClose={onClose} title="Search Afriwood" maxWidth="max-w-lg">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex overflow-hidden rounded-full border border-white/15 bg-black/40">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search universe, movies, shop..."
            className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="flex items-center gap-1 bg-[#f5c518] px-4 text-sm font-bold text-black hover:bg-[#d4a910]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            <Search size={14} /> Go
          </button>
        </div>
      </form>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">Quick links</p>
      <ul className="space-y-1">
        {SEARCH_QUICK_LINKS.map((link) => (
          <li key={link.href}>
            <button
              type="button"
              onClick={() => {
                onClose();
                router.push(link.href);
              }}
              className="flex w-full items-center justify-between rounded px-3 py-2.5 text-left text-sm text-white transition-colors hover:bg-white/5 hover:text-[#f5c518]"
            >
              <span style={{ fontFamily: "var(--font-sora)" }}>{link.label}</span>
              <span className="text-xs text-white/35">{link.hint}</span>
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
