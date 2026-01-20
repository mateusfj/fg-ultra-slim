import { Button } from "@/components/@shared/buttons/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

const notFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4 w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="text-6xl text-destructive">
          <AlertTriangle className="w-12 h-12" />
        </div>

        <h1 className="text-3xl font-bold">404 - Página não encontrada</h1>
        <p className="text-muted-foreground">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>

        <Link href="/">
          <Button>Voltar para o início</Button>
        </Link>
      </div>
    </div>
  );
};

export default notFound;
