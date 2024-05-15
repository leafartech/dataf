import Image from "next/image";

export default function Page() {
  return (
    <div className="relative h-screen w-full bg-zinc-950 flex flex-col items-center justify-center">
      <div className="flex flex-col sm:items-center gap-4 px-4">
        <div className="max-w-[200px] sm:max-w-xs">
          <Image
            src="/logo.png"
            alt=""
            width={569}
            height={130}
          />
        </div>
        <div className="w-full max-w-3xl flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-left sm:text-center text-white text-4xl font-bold">Tráfego pago para infoprodutos</h1>
            <h2 className="text-left sm:text-center text-zinc-200">Escalamos o faturamento dos nossos clientes</h2>
          </div>
          <ul className="w-full max-w-sm rounded-lg border border-zinc-200 px-4 py-6 flex flex-col gap-1 sm:items-center">
            <li className="relative text-zinc-400 flex items-center gap-1">
              <svg className="h-5 w-5 absolute left-0 top-[2px] fill-zinc-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M400-280v-400l200 200-200 200Z" />
              </svg>
              <span className="ps-6">1x 7 em 1</span>
            </li>
            <li className="relative text-zinc-400 flex items-center gap-1">
              <svg className="h-5 w-5 absolute left-0 top-[2px] fill-zinc-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M400-280v-400l200 200-200 200Z" />
              </svg>
              <span className="ps-6">15x 6 em 1</span>
            </li>
            <li className="relative text-zinc-400 flex items-center gap-1">
              <svg className="h-5 w-5 absolute left-0 top-[2px] fill-zinc-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M400-280v-400l200 200-200 200Z" />
              </svg>
              <span className="ps-6">32x 6 em 7</span>
            </li>
            <li className="relative text-zinc-400 flex items-center gap-1">
              <svg className="h-5 w-5 absolute left-0 top-[2px] fill-zinc-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M400-280v-400l200 200-200 200Z" />
              </svg>
              <span className="ps-6">6 em 30 todos os meses</span>
            </li>
            <li className="relative text-zinc-400 flex items-center gap-1">
              <svg className="h-5 w-5 absolute left-0 top-[2px] fill-zinc-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M400-280v-400l200 200-200 200Z" />
              </svg>
              <span className="ps-6">+ de 3MM gerenciados em anúncios online</span>
            </li>
          </ul>
          <a
            href="https://wa.me/5542988218484"
            className="w-full sm:max-w-sm flex justify-center gap-2 text-white bg-[#16a34a] py-2 font-semibold rounded-md"
          >
            <span className="relative w-5 h-5 translate-y-[2px]">
              <Image
                src="/wpp.webp"
                alt="Wpp Símbolo"
                layout="fill"
              />
            </span>
            <span>Entrar em contato</span>
          </a>
        </div>
      </div>
      <p className="text-zinc-500 absolute bottom-4 font-semibold text-xs">LMTS NEGOCIOS DIGITAIS LTDA - 37.625.091/0001-60</p>
    </div>
  )
}