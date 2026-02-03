import { useState } from "react";
import { Play, CheckCircle2, XCircle, RotateCcw, Code2, Zap, Palette } from "lucide-react";

type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: number;
};

const quizQuestions: QuizQuestion[] = [
  {
    question: "¿Qué tipo de software desarrolla SpiderLabs?",
    options: [
      "Solo aplicaciones móviles",
      "Soluciones personalizadas para diversos sectores",
      "Solo páginas web estáticas",
      "Solo software de contabilidad",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es nuestro enfoque principal?",
    options: [
      "Cantidad sobre calidad",
      "Precios más bajos del mercado",
      "Interfaces intuitivas, funcionales y eficientes",
      "Solo proyectos grandes",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué buscamos ser como empresa?",
    options: [
      "La empresa más grande",
      "Líderes en calidad, innovación y compromiso",
      "La más económica",
      "Solo trabajar con multinacionales",
    ],
    correctAnswer: 1,
  },
];

const demos = [
  {
    id: "calculator",
    title: "Calculadora Interactiva",
    icon: Code2,
    description: "Prueba nuestra mini calculadora",
  },
  {
    id: "animation",
    title: "Animaciones Fluidas",
    icon: Zap,
    description: "Experimenta nuestras animaciones",
  },
  {
    id: "theme",
    title: "Paleta de Colores",
    icon: Palette,
    description: "Explora nuestra paleta corporativa",
  },
];

const InteractiveSection = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [quizState, setQuizState] = useState({
    currentQuestion: 0,
    score: 0,
    showResult: false,
    selectedAnswer: null as number | null,
    isCorrect: null as boolean | null,
  });
  const [calcDisplay, setCalcDisplay] = useState("0");
  const [animationActive, setAnimationActive] = useState(false);

  const handleQuizAnswer = (answerIndex: number) => {
    const isCorrect = answerIndex === quizQuestions[quizState.currentQuestion].correctAnswer;
    setQuizState((prev) => ({
      ...prev,
      selectedAnswer: answerIndex,
      isCorrect,
      score: isCorrect ? prev.score + 1 : prev.score,
    }));

    setTimeout(() => {
      if (quizState.currentQuestion < quizQuestions.length - 1) {
        setQuizState((prev) => ({
          ...prev,
          currentQuestion: prev.currentQuestion + 1,
          selectedAnswer: null,
          isCorrect: null,
        }));
      } else {
        setQuizState((prev) => ({
          ...prev,
          showResult: true,
        }));
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      showResult: false,
      selectedAnswer: null,
      isCorrect: null,
    });
  };

  const handleCalcButton = (value: string) => {
    if (value === "C") {
      setCalcDisplay("0");
    } else if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        setCalcDisplay(String(eval(calcDisplay)));
      } catch {
        setCalcDisplay("Error");
      }
    } else {
      setCalcDisplay((prev) => (prev === "0" ? value : prev + value));
    }
  };

  return (
    <section id="pruebas" className="py-24 bg-navy-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Experiencia Práctica
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Pruebas Interactivas
          </h2>
          <p className="text-silver-300 max-w-2xl mx-auto">
            Conoce nuestras capacidades a través de estas demostraciones interactivas
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 ${
                activeDemo === demo.id
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-navy-800/50 text-silver-200 border-navy-600 hover:border-accent/50"
              }`}
            >
              <demo.icon className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold text-sm">{demo.title}</div>
                <div className="text-xs opacity-80">{demo.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="max-w-4xl mx-auto">
          {/* Quiz Demo (Default) */}
          {(!activeDemo || activeDemo === "quiz") && (
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <Play className="w-5 h-5 text-accent" />
                Quiz: ¿Cuánto conoces sobre SpiderLabs?
              </h3>

              {!quizState.showResult ? (
                <div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        Pregunta {quizState.currentQuestion + 1} de {quizQuestions.length}
                      </span>
                      <span className="text-sm font-semibold text-accent">
                        Puntos: {quizState.score}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all duration-500"
                        style={{
                          width: `${((quizState.currentQuestion + 1) / quizQuestions.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <p className="text-lg font-medium text-foreground mb-6">
                    {quizQuestions[quizState.currentQuestion].question}
                  </p>

                  <div className="grid gap-3">
                    {quizQuestions[quizState.currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(index)}
                        disabled={quizState.selectedAnswer !== null}
                        className={`p-4 rounded-lg border text-left transition-all duration-300 ${
                          quizState.selectedAnswer === index
                            ? quizState.isCorrect
                              ? "bg-green-500/20 border-green-500 text-green-600"
                              : "bg-red-500/20 border-red-500 text-red-600"
                            : quizState.selectedAnswer !== null &&
                              index === quizQuestions[quizState.currentQuestion].correctAnswer
                            ? "bg-green-500/20 border-green-500"
                            : "bg-muted/50 border-border hover:border-accent/50 text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {quizState.selectedAnswer === index ? (
                            quizState.isCorrect ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-500" />
                            )
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-current" />
                          )}
                          <span>{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">
                    {quizState.score === quizQuestions.length ? "🏆" : quizState.score >= 2 ? "🎉" : "💪"}
                  </div>
                  <h4 className="text-2xl font-display font-bold text-foreground mb-2">
                    {quizState.score === quizQuestions.length
                      ? "¡Perfecto!"
                      : quizState.score >= 2
                      ? "¡Muy bien!"
                      : "¡Buen intento!"}
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Obtuviste {quizState.score} de {quizQuestions.length} respuestas correctas
                  </p>
                  <button
                    onClick={resetQuiz}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Intentar de nuevo
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Calculator Demo */}
          {activeDemo === "calculator" && (
            <div className="bg-card rounded-2xl p-8 shadow-xl max-w-sm mx-auto">
              <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-accent" />
                Calculadora
              </h3>
              <div className="bg-navy-900 text-primary-foreground text-right text-3xl p-4 rounded-lg mb-4 font-mono">
                {calcDisplay}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map(
                  (btn) => (
                    <button
                      key={btn}
                      onClick={() => handleCalcButton(btn)}
                      className={`p-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                        ["C", "="].includes(btn)
                          ? "bg-accent text-accent-foreground hover:bg-accent/90"
                          : ["/", "*", "-", "+"].includes(btn)
                          ? "bg-navy-800 text-primary-foreground hover:bg-navy-700"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                    >
                      {btn}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Animation Demo */}
          {activeDemo === "animation" && (
            <div className="bg-card rounded-2xl p-8 shadow-xl text-center">
              <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Animaciones Fluidas
              </h3>
              <button
                onClick={() => setAnimationActive(!animationActive)}
                className="mb-8 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                {animationActive ? "Detener" : "Iniciar"} Animación
              </button>
              <div className="flex justify-center gap-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-12 h-12 bg-navy-900 rounded-lg transition-all duration-300 ${
                      animationActive ? "animate-bounce" : ""
                    }`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Theme Demo */}
          {activeDemo === "theme" && (
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <Palette className="w-5 h-5 text-accent" />
                Nuestra Paleta de Colores
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Navy 900", color: "bg-navy-900", text: "text-primary-foreground" },
                  { name: "Navy 800", color: "bg-navy-800", text: "text-primary-foreground" },
                  { name: "Navy 700", color: "bg-navy-700", text: "text-primary-foreground" },
                  { name: "Accent", color: "bg-accent", text: "text-accent-foreground" },
                  { name: "Silver 100", color: "bg-silver-100", text: "text-foreground" },
                  { name: "Silver 200", color: "bg-silver-200", text: "text-foreground" },
                  { name: "Silver 300", color: "bg-silver-300", text: "text-foreground" },
                  { name: "Background", color: "bg-background", text: "text-foreground" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${item.color} ${item.text} p-6 rounded-lg text-center font-medium shadow-sm border border-border`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
