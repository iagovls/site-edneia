import React, { useState } from 'react';
import { Star, CheckCircle, Heart, Target, Zap, Crown, ArrowRight, Quote } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/10 to-amber-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-900 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-8">
              <Crown className="w-4 h-4" />
              Mentoria Exclusiva
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-900 via-rose-700 to-amber-600 bg-clip-text text-transparent">
                A Marca É Você
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-rose-800 mb-8 max-w-4xl mx-auto leading-relaxed">
              Desperte a mulher que <span className="font-bold text-amber-600">Fatura, Lidera e Vive com Propósito</span> — tudo ao mesmo tempo.
            </h2>
            
            <div className="flex justify-center mb-12">
              <img 
                src="image.png" 
                alt="Mentora" 
                className="w-32 h-32 rounded-full border-4 border-amber-400 shadow-2xl object-cover"
              />
            </div>
            
            <button className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
              Quero transformar minha vida agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-rose-900 mb-8">
              Chega de carregar tudo nas costas e se sentir sozinha nessa jornada
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-8 rounded-2xl border border-rose-200">
              <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-rose-700" />
              </div>
              <h4 className="text-xl font-bold text-rose-800 mb-4">Sobrecarga Emocional</h4>
              <p className="text-rose-700">Você é mãe, esposa, empreendedora, gestora — e ainda precisa dar conta da casa, do negócio e da culpa.</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl border border-amber-200">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-amber-700" />
              </div>
              <h4 className="text-xl font-bold text-amber-800 mb-4">Energia Esgotada</h4>
              <p className="text-amber-700">O corpo vive cansado. A mente está travada. A fé enfraquece.</p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-2xl border border-rose-200">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-200 to-amber-200 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-rose-700" />
              </div>
              <h4 className="text-xl font-bold text-rose-800 mb-4">Potencial Bloqueado</h4>
              <p className="text-rose-700">No fundo… você sabe que tem mais em você — mas não sabe como acessar isso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-r from-rose-900 to-amber-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Existe um caminho. E ele começa <span className="text-amber-300">dentro de você</span>.
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-amber-300" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-amber-300">Corpo</h4>
              <p className="text-white/90">Energia, rotina e vitalidade para sustentar seus sonhos</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-amber-300" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-amber-300">Mente</h4>
              <p className="text-white/90">Clareza, coragem e estratégias de vendas que funcionam</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-10 h-10 text-amber-300" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-amber-300">Espírito</h4>
              <p className="text-white/90">Propósito, intuição e ação com fé inabalável</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl text-amber-200 mb-8">
              Para que você <span className="font-bold text-amber-300">aumente seu faturamento</span>, recupere sua força interior e lidere com confiança.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-rose-900 mb-4">O que você recebe</h3>
            <p className="text-xl text-rose-700">Um programa completo de transformação</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl border border-rose-200">
                <CheckCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-rose-800 mb-2">4 encontros individuais ao vivo</h4>
                  <p className="text-rose-700">1h30 cada sessão, focada 100% em você e seus objetivos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl border border-rose-200">
                <CheckCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-rose-800 mb-2">Acompanhamento por 3 meses</h4>
                  <p className="text-rose-700">Suporte contínuo para garantir sua transformação</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl border border-amber-200">
                <Star className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-amber-800 mb-2">Bônus: Estrutura Validada de Vendas</h4>
                  <p className="text-amber-700">Sistema comprovado para aumentar seu faturamento</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-rose-900 to-amber-800 p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-6 text-amber-300">Investimento</h4>
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">R$ 997</div>
                <p className="text-amber-200 mb-6">Parcelamento disponível</p>
                <p className="text-white/90 mb-8">Já tentou sozinha. Agora é hora de fazer com estrutura, direção e apoio real.</p>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-full font-bold text-lg transition-colors duration-300">
                  Garantir minha vaga agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-rose-900 mb-4">Depoimentos reais</h3>
            <p className="text-xl text-rose-700">Mulheres que transformaram suas vidas</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-rose-100">
              <Quote className="w-8 h-8 text-amber-500 mb-4" />
              <p className="text-rose-700 mb-6 italic">"Aumentei o faturamento, batei metas que antes pareciam impossíveis e aprendi a liderar com mais firmeza e humanidade."</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-200 to-amber-200 rounded-full flex items-center justify-center">
                  <span className="font-bold text-rose-800">L</span>
                </div>
                <div>
                  <h5 className="font-bold text-rose-800">Lucimar</h5>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-rose-100">
              <Quote className="w-8 h-8 text-amber-500 mb-4" />
              <p className="text-rose-700 mb-6 italic">"Depois de ler mais de 10 livros, finalmente encontrei equilíbrio entre vida pessoal e profissional."</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-200 to-amber-200 rounded-full flex items-center justify-center">
                  <span className="font-bold text-rose-800">M</span>
                </div>
                <div>
                  <h5 className="font-bold text-rose-800">Miriam</h5>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-rose-100">
              <Quote className="w-8 h-8 text-amber-500 mb-4" />
              <p className="text-rose-700 mb-6 italic">"Gratidão. Essa mentoria entregou muito mais do que imaginei. Virada de chave real."</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-200 to-amber-200 rounded-full flex items-center justify-center">
                  <span className="font-bold text-rose-800">L</span>
                </div>
                <div>
                  <h5 className="font-bold text-rose-800">Leza</h5>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-900 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Sua transformação começa <span className="text-amber-300">agora</span>
          </h3>
          <p className="text-xl text-amber-200 mb-12 max-w-2xl mx-auto">
            Não deixe mais um dia passar carregando tudo sozinha. É hora de despertar a mulher poderosa que existe em você.
          </p>
          
          <div className="space-y-6">
            <button className="group bg-amber-500 hover:bg-amber-600 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
              Quero transformar meu negócio e minha vida!
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <p className="text-amber-200 text-sm">
              ✨ Vagas limitadas • Suporte personalizado • Resultados garantidos
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-amber-300 mb-2">A Marca É Você</h4>
            <p className="text-rose-200">Mentoria para mulheres que querem faturar, liderar e viver com propósito</p>
          </div>
          
          <div className="border-t border-rose-800 pt-8">
            <p className="text-rose-300">© 2025 A Marca É Você. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;