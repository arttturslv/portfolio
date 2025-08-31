/** @format */

function App() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1400px] px-12  ">
        <header className="w-full flex h-10 px-4 items-center">
          <div className="w-12 h-8 bg-black"></div>

          <div className="w-full  gap-12 flex justify-center">
            <p>home</p>

            <p>projects</p>

            <p>blog</p>
          </div>

          <div>
            <p>lightmode</p>
          </div>
        </header>

        <main className="h-screen  flex justify-center space-y-2 flex-col items-center">
          <p className="font-semibold text-3xl">Olá, meu nome é</p>

          <h1 className="font-khan font-extrabold text-9xl">Artur</h1>
          <div className="w-full gap-12 flex justify-center">
            <p>github</p>

            <p>linkedin</p>

            <p>instagram</p>
          </div>
        </main>

        <section className="my-24 flex gap-12 items-center justify-center">
          <div className="max-w-[40%]">
            <p className="text-xl ">
              I’m a frontend developer based in Belo Horizonte — the capital of
              cheese 🧀. Passionate about crafting high-quality, delightful, and
              visually striking digital experiences. Amazed by little things,
              animals, art, technology and the capacities of our species.
            </p>

            <a href="#">talk to me</a>
          </div>

          <div className=" flex items-center justify-center">
            <img src="assets/images/me.png" alt="" />
          </div>
        </section>

        <section className="my-24 space-y-6 flex flex-col items-center">
          <h3>here some of my best skills</h3>

          <div className="flex gap-24 items-center justify-center">
            <img src="assets/images/techstack/figma.png" alt="" />
            <img src="assets/images/techstack/figma.png" alt="" />
            <img src="assets/images/techstack/figma.png" alt="" />
            <img src="assets/images/techstack/figma.png" alt="" />
            <img src="assets/images/techstack/figma.png" alt="" />
          </div>
        </section>

        <section className="my-24 space-y-6">
          <h2 className="font-khan text-3xl">Feature projects</h2>

          <div className="space-y-12 items-center justify-center">
            <div className="flex gap-12 items-center justify-center">
              <img src="assets/images/preview.png" alt="" />
              <div className="max-w-[40%]">
                <div>
                  <h4 className="font-khan text-3xl">Congrats</h4>
                  <span className="text-md">
                    React | TypeScript | Node | Mongo
                  </span>
                </div>
                <p>
                  Plataforma para criação de mensagens personalizadas que tornam
                  celebrações como aniversários, Natal e amizades mais únicas e
                  especiais.
                </p>
                <a href="#">See more</a>
              </div>
            </div>
            <div className="flex gap-12 items-center justify-center">
              <div className="max-w-[40%]">
                <div>
                  <h4 className="font-khan text-3xl">Congrats</h4>
                  <span className="text-md">
                    React | TypeScript | Node | Mongo
                  </span>
                </div>
                <p>
                  Plataforma para criação de mensagens personalizadas que tornam
                  celebrações como aniversários, Natal e amizades mais únicas e
                  especiais.
                </p>
                <a href="#">See more</a>
              </div>
              <img src="assets/images/preview.png" alt="" />
            </div>
            <div className="flex gap-12 items-center justify-center">
              <img src="assets/images/preview.png" alt="" />
              <div className="max-w-[40%]">
                <div>
                  <h4 className="font-khan text-3xl">Congrats</h4>
                  <span className="text-md">
                    React | TypeScript | Node | Mongo
                  </span>
                </div>
                <p>
                  Plataforma para criação de mensagens personalizadas que tornam
                  celebrações como aniversários, Natal e amizades mais únicas e
                  especiais.
                </p>
                <a href="#">See more</a>
              </div>
            </div>
          </div>
        </section>

        <section className="my-24 flex justify-center">
          <cite className="text-3xl">Legatum est sensus vitae</cite>
        </section>

        <footer className="py-2">
          <section className="flex justify-between">
            <div className="w-60">
              <p>
                developer | designer frontend | tech passionated curious |
                trying things
              </p>
            </div>
            <div>
              <span>Socials</span>
              <div className="w-full  gap-2 flex justify-center">
                <p>github</p>

                <p>linkedin</p>

                <p>instagram</p>
              </div>
            </div>
          </section>
          <section className="flex justify-center">
            <span>all rights belong to creator @ 2025</span>{" "}
          </section>
        </footer>
      </div>
    </div>
  );
}

export default App;
