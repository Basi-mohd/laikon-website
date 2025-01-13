import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";

const FAQSection = () => {
    const faqs = [
        {
          question: "What makes Laikon Batteries unique?",
          answer:
            "Laikon Batteries combines 30+ years of expertise with advanced technology to deliver reliable, high-performance energy solutions tailored to Indian needs.",
        },
        {
          question: "How do I choose the right battery for my needs?",
          answer:
            "Selecting the right battery depends on your power requirements, backup duration, and application (home, business, or solar). Contact our experts for personalized guidance.",
        },
        {
          question: "Are Laikon Batteries suitable for Indian weather conditions?",
          answer:
            "Yes! Our batteries are engineered to handle India's diverse climates, with features like excellent heat dissipation and low self-discharge.",
        },
        {
          question: "How do I maintain my tubular battery?",
          answer:
            "Maintain your battery by checking water levels regularly, cleaning terminals, ensuring proper ventilation, and avoiding overcharging or deep discharging.",
        },
        {
          question: "Can I use Laikon Batteries for solar systems?",
          answer:
            "Absolutely! Laikon Batteries are designed for solar applications, offering deep cycling capability and long service life for efficient energy storage.",
        },
        {
          question: "How do I dispose of old batteries responsibly?",
          answer:
            "Recycle old batteries through authorized recycling centers or contact us for guidance on eco-friendly disposal methods.",
        },
      ];
    
      return (
        <section className="py-16  w-full max-w-6xl">
          <div className="container mx-auto px-6 lg:px-12 grid  gap-12 items-center">
            {/* Left Section: FAQ */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>

              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-lg font-medium text-gray-700 hover:text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
    
          </div>
        </section>
      );
}


export default FAQSection;