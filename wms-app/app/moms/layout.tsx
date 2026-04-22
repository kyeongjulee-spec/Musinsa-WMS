import MOMSSidebar from "@/components/moms/Sidebar";
import MOMSHeader from "@/components/moms/Header";

export default function MOMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <MOMSSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <MOMSHeader />
        <main className="flex-1 overflow-auto p-3" style={{ background: "#f8fafc" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
