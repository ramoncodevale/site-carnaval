import { MapPin, Search } from "lucide-react";

const Home = () => {
  return (
    <section className="mt-24 flex flex-col items-center justify-center">
      <p className="text-xs font-medium text-customRed">FIND YOUR BLOCK</p>
      <h1 className="mt-5 text-center text-4xl font-bold text-customDark">
        Encontre os <span className="text-customPurple">melhores blocos</span>
        <br /> de carnaval de 2023
      </h1>
      <div className="mt-10 flex h-32 w-customWidth items-center justify-center rounded-xl bg-white">
        <div className="relative flex items-center space-x-6">
          {" "}
          {/* Espaçamento horizontal de 24px */}
          <div className="relative flex items-center">
            <input
              className="h-12 w-customWidthInput rounded-md bg-customLightGray pl-10"
              type="text"
              placeholder="Pesquise seu nome"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-customRed" />
            </div>
          </div>
          <div className="relative flex items-center">
            <select className="h-12 w-customWidthInput rounded-md bg-customLightGray pl-10">
              <option value="">Selecione uma opção</option>
              <option value="bloco1">Bloco 1</option>
              <option value="bloco2">Bloco 2</option>
              <option value="bloco3">Bloco 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MapPin className="h-5 w-5 text-customRed" />
            </div>
          </div>
          <button className="h-12 w-40 rounded-md bg-customPurple text-sm font-bold text-white">
            BUSCAR AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
