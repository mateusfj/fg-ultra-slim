import { CreditCard, Lock, ShieldCheck, Truck } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: CreditCard,
    label: "Parcelamos",
    value: "Em até 12x",
  },
  {
    icon: Truck,
    label: "Frete rápido",
    value: "Para todo Brasil",
  },
  {
    icon: ShieldCheck,
    label: "Compra segura",
    value: "Site protegido",
  },
  {
    icon: Lock,
    label: "Dados protegidos",
    value: "SSL 100%",
  },
];

const TrustBar = () => {
  return (
    <div className="border-y">
      <div className="max-w-[1200px] mx-auto px-[5%] py-6 flex justify-center">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_ITEMS.map(({ icon: Icon, label, value }) => (
            <TrustItem
              key={label}
              icon={<Icon size={28} />}
              label={label}
              value={value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TrustItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <div className="flex items-center gap-3 p-2">
      <div className="text-primary">{icon}</div>
      <div className="leading-tight">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export { TrustBar };
