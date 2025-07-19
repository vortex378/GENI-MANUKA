"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "./animated-section"

const faqs = [
  {
    question: "Çfarë është mjalti Manuka dhe pse është i veçantë?",
    answer:
      "Mjalti Manuka është një lloj mjalti premium që prodhohet nga bletët që mbledhin nektar nga lulet e pemës Manuka në Zelandën e Re. Ai përmban MGO (Methylglyoxal) që i jep veti antibakteriale të fuqishme dhe përfitime të veçanta shëndetësore.",
  },
  {
    question: "Si mund të porosis mjalte Manuka në Shqipëri?",
    answer:
      "Mund të porositni mjalte Manuka nga Manuka Albania duke na kontaktuar në WhatsApp në numrin +355697320453 ose duke na ndjekur në Instagram. Ofrojmë dërgesa në të gjithë Shqipërinë.",
  },
  {
    question: "Çfarë do të thotë MGO në mjaltë Manuka?",
    answer:
      "MGO (Methylglyoxal) është komponenti aktiv kryesor në mjaltë Manuka që përcakton fuqinë e tij antibakteriale. Sa më i lartë numri i MGO, aq më i fuqishëm është mjalti. Ofrojmë mjalte me MGO nga 70+ deri në 1959+.",
  },
  {
    question: "Cilat janë markat e mjaltit Manuka që ofroni?",
    answer:
      "Manuka Albania ofron marka të njohura si Koru, NUI, Manuka Health dhe Melora. Të gjitha markat janë të importuara drejtpërdrejt nga Zelanda e Re dhe janë të certifikuara për autenticitet.",
  },
  {
    question: "Sa kushton mjalti Manuka në Shqipëri?",
    answer:
      "Çmimet variojnë sipas markës dhe nivelit të MGO. Fillojnë nga 2,500 Lekë për MGO 70+ dhe shkojnë deri në 220,000 Lekë për varietetet më premium si Koru MGO 1959+.",
  },
  {
    question: "A është i sigurt mjalti Manuka për fëmijët?",
    answer:
      "Po, mjalti Manuka është i sigurt për fëmijët mbi 1 vjeç. Megjithatë, si me çdo mjalte, nuk rekomandohet për foshnjat nën 12 muaj. Konsultohuni me mjekun tuaj për dozën e duhur.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Pyetje të Shpeshta për Mjaltë Manuka</h2>
          <p className="text-xl text-gray-600">
            Gjeni përgjigjet për pyetjet më të shpeshta rreth mjaltit Manuka në Shqipëri
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      {openIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-amber-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-amber-600 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
