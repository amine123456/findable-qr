
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QrCode, Shield, Tag } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="content-section min-h-[80vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium inline-block animate-fade-in">
                Protect What Matters
              </span>
              <h1 className="heading-xl mt-6">
                Never Lose Your Valuables Again
              </h1>
              <p className="subtitle">
                Secure your belongings with smart QR code stickers. The easiest way to help lost items find their way back home.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="glass-panel rounded-2xl p-8 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Troovi in action"
                className="rounded-lg w-full object-cover shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="content-section bg-secondary">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="heading-lg">How Troovi Works</h2>
          <p className="subtitle">
            Three simple steps to protect your valuables with our smart QR code system
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade-up">
          {[
            {
              icon: QrCode,
              title: "Get Your QR Codes",
              description: "Order our premium QR code stickers or stylish accessories",
            },
            {
              icon: Tag,
              title: "Label Your Items",
              description: "Apply the QR codes to your valuables - wallets, bags, pet collars",
            },
            {
              icon: Shield,
              title: "Stay Protected",
              description: "If lost, finders can scan the QR code to help return your items",
            },
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="text-center max-w-3xl mx-auto animate-fade-up">
          <h2 className="heading-lg mb-6">Ready to Secure Your Valuables?</h2>
          <p className="subtitle mb-8">
            Join thousands of people who trust Troovi to protect their belongings
          </p>
          <Button size="lg" className="text-lg">
            Start Protecting Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
