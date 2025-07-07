"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Building,
} from "lucide-react";
import type { TranslationKey } from "@/lib/translations";

interface ContactProps {
  translations: TranslationKey;
}

export function Contact({ translations }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(":invalid") as HTMLElement;
      firstInvalid?.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setMessage("Please wait...");

    const formData = new FormData(form);
    const object: Record<string, string> = {};
    formData.forEach((value, key) => {
      object[key] = value.toString();
    });
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const responseData = await response.json();

      if (response.status === 200) {
        setSubmitStatus("success");
        setMessage(responseData.message || translations.contact.success);
        form.reset();
      } else {
        console.log(response);
        setSubmitStatus("error");
        setMessage(responseData.message || translations.contact.error);
      }
    } catch (error) {
      console.log(error);
      setSubmitStatus("error");
      setMessage("Something went wrong!");
    } finally {
      setIsSubmitting(false);
      // Hide message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-slate-800 to-slate-900"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
            {translations.contact.title}
          </h2>
          <p className="text-xl text-slate-300 mb-4">
            {translations.contact.subtitle}
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {translations.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">
                    {translations.contact.form.title || "Envie sua mensagem"}
                  </h3>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 needs-validation"
                  noValidate
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="db1154ef-e3cf-4bad-ad7a-e9c5d94c55c3"
                  />
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        name="name"
                        placeholder={translations.contact.form.name}
                        required
                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder={translations.contact.form.email}
                        required
                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      name="company"
                      placeholder={translations.contact.form.company}
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder={translations.contact.form.message}
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400"
                    />
                  </div>

                  {/* Result Message */}
                  {message && (
                    <div
                      className={`rounded-lg p-4 ${
                        submitStatus === "success"
                          ? "bg-green-500/20 border border-green-400/30"
                          : submitStatus === "error"
                          ? "bg-red-500/20 border border-red-400/30"
                          : "bg-blue-500/20 border border-blue-400/30"
                      }`}
                    >
                      <p
                        className={`text-sm ${
                          submitStatus === "success"
                            ? "text-green-300"
                            : submitStatus === "error"
                            ? "text-red-300"
                            : "text-blue-300"
                        }`}
                      >
                        {message}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        {translations.contact.form.sending}
                      </>
                    ) : (
                      <>
                        {translations.contact.form.submit}
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: translations.contact.info.email,
                  color: "blue",
                  href: `mailto:${translations.contact.info.email}`,
                },
                // {
                //   icon: Phone,
                //   label: "Telefone",
                //   value: translations.contact.info.phone,
                //   color: "green",
                //   href: `tel:${translations.contact.info.phone}`,
                // },
                {
                  icon: MapPin,
                  label: "Localização",
                  value: translations.contact.info.location,
                  color: "purple",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-${item.color}-500/20 rounded-xl flex items-center justify-center border border-${item.color}-400/30`}
                      >
                        <item.icon
                          className={`w-6 h-6 text-${item.color}-400`}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {item.label}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-slate-300 hover:text-blue-400 transition-colors underline decoration-dotted underline-offset-2"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-300">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-400/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <Building className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">
                  {translations.contact.partnerships ||
                    "Parcerias & Investimentos"}
                </h3>
                <p className="text-slate-300 text-sm">
                  {translations.contact.partnershipsDesc ||
                    "Interessado em parcerias estratégicas ou oportunidades de investimento? Entre em contato para discutir como podemos trabalhar juntos."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
