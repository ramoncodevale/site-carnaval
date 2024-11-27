import { MapPin, Search } from "lucide-react";

const Home = () => {
  return (
    <section className="mt-24 flex flex-col items-center justify-center px-4">
      <p className="text-xs font-medium text-customRed">FIND YOUR BLOCK</p>
      <h1 className="mt-5 text-center text-4xl font-bold text-customDark">
        Encontre os <span className="text-customPurple">melhores blocos</span>
        <br /> de carnaval de 2023
      </h1>

      <div className="mt-10 flex w-full max-w-4xl items-center justify-center rounded-xl bg-white shadow-lg">
        <div className="flex w-full items-center justify-between space-x-6 px-6 py-4">
          <div className="relative w-1/3">
            <input
              className="h-12 w-full rounded-md bg-customLightGray pl-10 text-sm placeholder-gray-500 focus:outline-none"
              type="text"
              placeholder="Pesquise seu nome"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-customRed" />
            </div>
          </div>

          <div className="relative w-1/3">
            <select className="h-12 w-full rounded-md bg-customLightGray pl-10 text-sm focus:outline-none">
              <option value="">Selecione uma opção</option>
              <option value="bloco1">Bloco 1</option>
              <option value="bloco2">Bloco 2</option>
              <option value="bloco3">Bloco 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MapPin className="h-5 w-5 text-customRed" />
            </div>
          </div>

          <button className="hover:bg-customPurpleDark h-12 w-40 rounded-md bg-customPurple text-sm font-bold text-white">
            BUSCAR AGORA
          </button>
        </div>
      </div>

      <div className="mt-24 flex w-full items-center justify-between pl-[112px] pr-[115px]">
        <h3 className="text-3xl font-bold text-customDark">
          Blocos recomendados
        </h3>
        <div className="flex h-12 w-48 items-center justify-center gap-2 bg-white">
          <button className="h-8 w-20 rounded-md bg-customPurple px-4 py-2 text-sm font-medium text-white">
            LISTA
          </button>
          <button className="h-8 w-20 rounded-md bg-customLightGray px-4 py-2 text-sm font-medium text-customPurple">
            MAPA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
