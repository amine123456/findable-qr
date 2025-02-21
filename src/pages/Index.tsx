
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QrCode, Shield, Tag, Star, MessageCircle, Check, ArrowRight } from "lucide-react";

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

      {/* Reviews Section */}
      <section className="content-section bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="heading-lg">What Our Users Say</h2>
          <p className="subtitle">Join thousands of satisfied customers who trust Troovi</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Travel Enthusiast",
              comment: "Troovi helped me recover my lost laptop at the airport. The QR code system works brilliantly!",
              rating: 5,
            },
            {
              name: "Michael Chen",
              role: "Business Professional",
              comment: "I use Troovi for all my important devices. It's simple yet incredibly effective.",
              rating: 5,
            },
            {
              name: "Emma Williams",
              role: "Pet Owner",
              comment: "Perfect for my dog's collar! Gives me peace of mind knowing he can be identified if lost.",
              rating: 5,
            },
          ].map((review, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">{review.comment}</p>
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="content-section bg-secondary">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg">Frequently Asked Questions</h2>
          <p className="subtitle">Everything you need to know about Troovi</p>
        </div>
        <div className="max-w-3xl mx-auto divide-y">
          {[
            {
              q: "How does Troovi work?",
              a: "Troovi uses QR code technology to create unique identifiers for your valuables. When scanned, these codes provide a secure way for finders to contact you.",
            },
            {
              q: "Is my information secure?",
              a: "Yes, we use bank-level encryption to protect your data. Only the information you choose to share is visible when your QR code is scanned.",
            },
            {
              q: "What items can I protect with Troovi?",
              a: "You can protect almost anything - laptops, phones, keys, wallets, bags, and even pet collars. Our QR codes are designed to be durable and long-lasting.",
            },
            {
              q: "How much does it cost?",
              a: "We offer various packages starting from basic protection to premium services. Visit our pricing page for detailed information.",
            },
          ].map((faq, index) => (
            <div key={index} className="py-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                {faq.q}
              </h3>
              <p className="text-muted-foreground pl-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg">Why Choose Troovi</h2>
          <p className="subtitle">Advanced features for complete peace of mind</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Real-time notifications when items are found",
            "Secure messaging system",
            "24/7 customer support",
            "Worldwide coverage",
            "Multiple language support",
            "Customizable privacy settings",
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3 p-4">
              <Check className="w-6 h-6 text-primary shrink-0" />
              <span className="text-lg">{feature}</span>
            </div>
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
          <Button size="lg" className="text-lg group">
            Start Protecting Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50">
        <div className="content-section">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Troovi</h3>
              <p className="text-muted-foreground">Protecting what matters most to you with smart QR technology.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Troovi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
