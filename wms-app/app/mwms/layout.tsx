import MWMSSidebar from "@/components/mwms/Sidebar";
import MWMSHeader from "@/components/mwms/Header";

export default function MWMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <MWMSSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <MWMSHeader />
        <main className="flex-1 overflow-auto p-3" style={{ background: "#f3f4f6" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
