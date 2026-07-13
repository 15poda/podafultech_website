"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { calculateAssessmentResults, type AssessmentAnswers } from "./scoring";
import { generateRecommendations } from "@/lib/recommendations/recommendationService";

const steps = [
  { id: 1, title: "Business Profile", description: "Understand the operating context" },
  { id: 2, title: "Inventory Operations", description: "Map current inventory routines" },
  { id: 3, title: "Operational Pain", description: "Identify the pressure points" },
  { id: 4, title: "Growth Readiness", description: "Gauge future complexity" },
];

const stepOneQuestions = [
  {
    key: "industry",
    label: "Industry",
    type: "select",
    options: ["Manufacturing", "Wholesale", "Retail", "Ecommerce", "Distributor", "Food Production", "Other"],
  },
  {
    key: "employees",
    label: "Employees",
    type: "select",
    options: ["1-5", "6-10", "11-25", "26-50", "51-100", "100+"],
  },
  {
    key: "skuCount",
    label: "Approximate SKU count",
    type: "select",
    options: ["<50", "50-200", "200-500", "500-1000", "1000+"],
  },
  {
    key: "salesChannels",
    label: "Where do you sell?",
    type: "multiselect",
    options: ["Physical Store", "Warehouse", "Ecommerce", "B2B", "Manufacturing"],
  },
  {
    key: "currentTracking",
    label: "Current inventory tracking",
    type: "select",
    options: ["Notebook", "Excel", "Google Sheets", "Accounting Software", "Inventory Software", "ERP"],
  },
] as const;

const stepTwoQuestions = [
  {
    key: "inventoryMismatch",
    label: "Inventory mismatch frequency",
    type: "select",
    options: ["Never", "Sometimes", "Monthly", "Weekly", "Daily"],
  },
  {
    key: "multipleEditors",
    label: "Multiple people edit inventory?",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    key: "stockouts",
    label: "Unexpected stockouts",
    type: "select",
    options: ["Never", "Few times/year", "Monthly", "Weekly"],
  },
  {
    key: "duplicatePurchases",
    label: "Purchased inventory already in stock?",
    type: "select",
    options: ["Never", "Once", "Several", "Frequently"],
  },
  {
    key: "inventoryVisibility",
    label: "Can staff instantly see inventory?",
    type: "select",
    options: ["Always", "Sometimes", "No"],
  },
  {
    key: "purchaseOrdersBy",
    label: "Purchase orders created by",
    type: "select",
    options: ["Inventory Software", "Spreadsheet", "Email", "Phone", "WhatsApp"],
  },
  {
    key: "stockCountCadence",
    label: "Stock counts",
    type: "select",
    options: ["Weekly", "Monthly", "Quarterly", "Only when something goes wrong"],
  },
  {
    key: "reorderPoints",
    label: "Automated reorder points?",
    type: "select",
    options: ["Yes", "Partially", "No"],
  },
] as const;

const stepThreeQuestions = [
  {
    key: "hoursUpdatingInventory",
    label: "Hours/week updating inventory",
    type: "select",
    options: ["0-2", "3-5", "6-10", "10+"],
  },
  {
    key: "delayedOrders",
    label: "Customer orders delayed?",
    type: "select",
    options: ["Never", "Occasionally", "Often"],
  },
  {
    key: "inventoryConfidence",
    label: "Confidence in inventory accuracy",
    type: "slider",
    min: 1,
    max: 10,
  },
  {
    key: "auditDuration",
    label: "Stock audit duration",
    type: "select",
    options: ["<1 hour", "Half day", "One day", "Several days"],
  },
  {
    key: "managerVisibility",
    label: "Managers can see inventory?",
    type: "select",
    options: ["Yes", "Sometimes", "No"],
  },
  {
    key: "systemsContainingInventory",
    label: "How many systems contain inventory?",
    type: "select",
    options: ["1", "2", "3", "4+"],
  },
] as const;

const stepFourQuestions = [
  {
    key: "planningGrowth",
    label: "Planning growth?",
    type: "select",
    options: ["No", "Yes", "Rapidly"],
  },
  {
    key: "openingWarehouse",
    label: "Opening another warehouse?",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    key: "planningEcommerce",
    label: "Planning ecommerce?",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    key: "barcodeScanning",
    label: "Need barcode scanning?",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    key: "manufacturingWorkflows",
    label: "Need manufacturing workflows?",
    type: "select",
    options: ["Yes", "No"],
  },
] as const;

const questionSets = [stepOneQuestions, stepTwoQuestions, stepThreeQuestions, stepFourQuestions];

const defaultAnswers: AssessmentAnswers = {
  salesChannels: [],
  inventoryConfidence: 5,
};

export default function InventoryAssessmentPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>(defaultAnswers);
  const [validationError, setValidationError] = useState("");
  const formContentRef = useRef<HTMLDivElement | null>(null);

  const activeQuestions = step < steps.length ? questionSets[step] : [];

  const isComplete = step >= steps.length;

  const results = useMemo(() => calculateAssessmentResults(answers), [answers]);
  const recommendations = useMemo(
    () =>
      generateRecommendations({
        overallScore: results.overallScore,
        categoryScores: results.categoryScores,
        answers,
      }),
    [answers, results]
  );
  const [savedId, setSavedId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [contact, setContact] = useState({ firstName: "", email: "", company: "" });

  useEffect(() => {
    if (formContentRef.current) {
      formContentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  // Persist completed assessment once when results are reached
  useEffect(() => {
    const save = async () => {
      try {
        setSaving(true);
        const payload = {
          answers,
          results,
          recommendations,
          industry: answers.industry || null,
          employeeCount: answers.employees || null,
          skuCount: answers.skuCount || null,
          inventoryMethod: answers.currentTracking || null,
          growthAnswers: {
            planningGrowth: answers.planningGrowth || null,
            openingWarehouse: answers.openingWarehouse || null,
            planningEcommerce: answers.planningEcommerce || null,
          },
          weakestCategory: results.biggestWeakArea,
          recommendedSoftware: recommendations.softwareRecommendation?.name ?? null,
          businessMaturity: recommendations.maturityTitle ?? null,
          urgency: recommendations.urgency ?? null,
          consultationRecommended: Boolean(recommendations.consultationRecommendation),
        };

        const res = await fetch("/api/inventory-assessments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const body = await res.json();
        if (res.ok) {
          setSavedId(body.id);
        } else {
          console.error("Failed saving assessment", body);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setSaving(false);
      }
    };

    if (isComplete && !savedId && !saving) {
      save();
    }
  }, [isComplete, savedId, answers, results, saving]);

  const updateAnswer = (key: keyof AssessmentAnswers, value: AssessmentAnswers[keyof AssessmentAnswers]) => {
    setAnswers((current) => ({ ...current, [key]: value }));
    setValidationError("");
  };

  const handleNext = () => {
    const currentQuestions = activeQuestions;
    const hasError = currentQuestions.some((question) => {
      const value = answers[question.key as keyof AssessmentAnswers];
      if (question.type === "multiselect") {
        return !Array.isArray(value) || value.length === 0;
      }
      if (question.type === "slider") {
        return typeof value !== "number";
      }
      return !value;
    });

    if (hasError) {
      setValidationError("Please complete every answer before continuing.");
      return;
    }

    if (step < steps.length - 1) {
      setStep((current) => current + 1);
      setValidationError("");
      return;
    }

    setStep(steps.length);
    setValidationError("");
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((current) => current - 1);
      setValidationError("");
    }
  };

  const toggleSelection = (value: string) => {
    const current = answers.salesChannels ?? [];
    const hasValue = current.includes(value);
    const next = hasValue ? current.filter((item) => item !== value) : [...current, value];
    updateAnswer("salesChannels", next);
  };

  const renderQuestion = (question: (typeof activeQuestions)[number]) => {
    const value = answers[question.key as keyof AssessmentAnswers];

    if (question.type === "multiselect") {
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {question.options.map((option) => {
            const selected = (answers.salesChannels ?? []).includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleSelection(option)}
                className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${selected ? "border-primary bg-primary/10 text-primary" : "border-white/10 bg-white/5 hover:border-primary/60"}`}
              >
                {option}
              </button>
            );
          })}
        </div>
      );
    }

    if (question.type === "slider") {
      return (
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-5">
          <input
            type="range"
            min={question.min}
            max={question.max}
            value={typeof value === "number" ? value : 5}
            onChange={(event) => updateAnswer(question.key as keyof AssessmentAnswers, Number(event.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Low confidence</span>
            <span className="text-lg font-semibold text-foreground">{value ?? 5}/10</span>
            <span>High confidence</span>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-md">
        <Select
          value={typeof value === "string" ? value : undefined}
          onValueChange={(option) => updateAnswer(question.key as keyof AssessmentAnswers, option)}
        >
          <SelectTrigger className="h-12 rounded-2xl border-white/10 bg-white/5 text-sm">
            <SelectValue placeholder="Choose an option" />
          </SelectTrigger>
          <SelectContent>
            {question.options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(120,119,198,0.25),_transparent_30%),linear-gradient(135deg,_#0b0b12_0%,_#12121d_100%)] text-foreground">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
          <a href="/" className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
            ← Back to home
          </a>
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <Warehouse className="h-4 w-4" />
            Inventory Ops Assessment
          </div>
        </header>

        <section className="flex-1 rounded-[2rem] border border-white/10 bg-background/80 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {isComplete ? "Your inventory maturity snapshot" : "Inventory Operations Assessment"}
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
                {isComplete
                  ? "This local scorecard summarizes your current inventory maturity and highlights the biggest gap to address."
                  : "Answer a few questions about how your inventory operates today so we can map your maturity level."}
              </p>
            </div>
          </div>

          {!isComplete ? (
            <div className="space-y-6" ref={formContentRef}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
                <div className="relative mx-auto w-full max-w-[720px] px-2 py-3">
                  <div className="absolute inset-x-5 top-7 h-px rounded-full bg-white/10" />
                  <div className="relative grid grid-cols-4 gap-2">
                    {steps.map((item, index) => {
                      const done = index < step;
                      const active = index === step;
                      return (
                        <div key={item.id} className="flex flex-col items-center gap-2 text-center">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full border text-[11px] font-semibold ${done ? "border-primary bg-primary text-primary-foreground" : active ? "border-primary bg-primary/10 text-primary" : "border-white/10 bg-transparent text-muted-foreground"}`}>
                            {index + 1}
                          </div>
                          <p className={`text-[10px] font-medium leading-tight ${done || active ? "text-foreground" : "text-muted-foreground"}`}>
                            {item.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
                <div className="mb-6">
                  <p className="text-sm font-medium text-primary">{steps[step].title}</p>
                  <h2 className="mt-2 text-2xl font-semibold">{steps[step].description}</h2>
                </div>

                <div className="space-y-6">
                  {activeQuestions.map((question) => (
                    <div key={question.key} className="space-y-3">
                      <label className="text-sm font-semibold text-foreground">{question.label}</label>
                      {renderQuestion(question)}
                    </div>
                  ))}
                </div>

                {validationError ? <p className="mt-4 text-sm text-destructive">{validationError}</p> : null}

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                  <Button variant="outline" onClick={handleBack} disabled={step === 0} className="sm:min-w-32">
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNext} className="sm:min-w-32">
                    {step === steps.length - 1 ? "View Results" : "Next"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    <Sparkles className="h-4 w-4" />
                    Diagnostic complete
                  </div>

                  <div className="mt-4 flex items-center gap-6">
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[14px] border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/10">
                      <div className="absolute inset-0 rounded-full border-[14px] border-primary border-t-transparent" style={{ transform: `rotate(${results.overallScore * 3.6}deg)` }} />
                      <div className="text-center">
                        <p className="text-4xl font-semibold text-foreground">{results.overallScore}</p>
                        <p className="text-xs text-muted-foreground">/100</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Biggest weak area</h3>
                      <p className="mt-2 text-lg text-primary">{results.biggestWeakArea}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground">Unlock Your Complete Report</p>
                    <div className="mt-4 rounded-2xl border border-white/10 bg-background/60 p-4">
                      <p className="text-sm">To view the full report, provide your details and we'll email the complete assessment to you.</p>
                      <div className="mt-4 grid gap-3">
                        <input
                          value={contact.firstName}
                          onChange={(e) => setContact((s) => ({ ...s, firstName: e.target.value }))}
                          placeholder="First name"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        />
                        <input
                          value={contact.email}
                          onChange={(e) => setContact((s) => ({ ...s, email: e.target.value }))}
                          placeholder="Email address"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        />
                        <input
                          value={contact.company}
                          onChange={(e) => setContact((s) => ({ ...s, company: e.target.value }))}
                          placeholder="Company (optional)"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        />
                        <div className="flex items-center justify-between gap-3">
                          <Button
                            onClick={async () => {
                              setEmailError(null);
                              if (!savedId) {
                                setEmailError("Assessment not saved yet - please try again shortly.");
                                return;
                              }
                              setSendingEmail(true);
                              try {
                                const res = await fetch("/api/inventory-assessments/send", {
                                  method: "POST",
                                  headers: { "Content-Type": "application/json" },
                                  body: JSON.stringify({
                                    id: savedId,
                                    firstName: contact.firstName,
                                    email: contact.email,
                                    company: contact.company,
                                    answers,
                                    results,
                                  }),
                                });
                                const body = await res.json();
                                if (!res.ok) {
                                  setEmailError(body.error || "Failed to send email");
                                } else {
                                  setUnlocked(true);
                                }
                              } catch (err: any) {
                                setEmailError(err.message || String(err));
                              } finally {
                                setSendingEmail(false);
                              }
                            }}
                            disabled={sendingEmail}
                          >
                            {sendingEmail ? "Sending..." : "Email My Report"}
                          </Button>
                          <div className="text-sm text-muted-foreground">We won't share your info.</div>
                        </div>
                        {emailError ? <p className="text-sm text-destructive">{emailError}</p> : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 rounded-3xl border border-white/10 bg-background/60 p-5 relative">
                  {/* Blurred detailed report when locked */}
                  <div className={`${unlocked ? "opacity-100 blur-0" : "opacity-60 blur-sm pointer-events-none"}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Overall score</span>
                      <span className="font-semibold text-primary">{results.overallScore}/100</span>
                    </div>
                    {Object.entries(results.categoryScores).map(([label, score]) => (
                      <div key={label} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>{label}</span>
                          <span className="text-muted-foreground">{score}/100</span>
                        </div>
                        <Progress value={score} className="h-2" />
                      </div>
                    ))}

                    {unlocked ? (
                      <div className="mt-6 rounded-3xl border border-white/10 bg-background/80 p-5">
                        <div className="space-y-5">
                          <div>
                            <div className="flex items-center justify-between gap-4">
                              <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Maturity</p>
                                <h3 className="mt-2 text-lg font-semibold">{recommendations.maturityTitle}</h3>
                              </div>
                              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{recommendations.urgency} urgency</span>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-muted-foreground">{recommendations.maturityDescription}</p>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-foreground">Recommended next actions</p>
                            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                              {recommendations.actionPlan.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                  <span className="mt-1 block h-2 w-2 rounded-full bg-primary" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {recommendations.softwareRecommendation ? (
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                              <p className="text-sm font-semibold text-foreground">Software fit</p>
                              <h4 className="mt-2 text-base font-semibold">{recommendations.softwareRecommendation.name}</h4>
                              <p className="mt-2 text-sm text-muted-foreground">{recommendations.softwareRecommendation.reason}</p>
                              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">Ideal for {recommendations.softwareRecommendation.idealFor}</p>
                              <a
                                href={recommendations.softwareRecommendation.website}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                              >
                                {recommendations.softwareRecommendation.buttonLabel}
                              </a>
                            </div>
                          ) : null}

                          {recommendations.consultationRecommendation ? (
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                              <p className="text-sm font-semibold text-foreground">Consultation recommendation</p>
                              <h4 className="mt-2 text-base font-semibold">{recommendations.consultationRecommendation.title}</h4>
                              <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line">{recommendations.consultationRecommendation.description}</p>
                              <a
                                href={recommendations.consultationRecommendation.ctaUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 inline-flex rounded-full border border-white/10 bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-white/5"
                              >
                                {recommendations.consultationRecommendation.cta}
                              </a>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {!unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-xl bg-black/40 p-4 text-center text-sm text-muted-foreground">Unlock the full report to see category breakdowns and recommendations.</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="outline" onClick={() => { setStep(0); setAnswers(defaultAnswers); setUnlocked(false); }}>
                  Restart assessment
                </Button>
                <Button asChild>
                  <a href="/">Return to homepage</a>
                </Button>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
