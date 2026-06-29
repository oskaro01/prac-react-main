"use client";

import { useReportWebVitals } from "next/web-vitals";

export default function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    console.log("[Step 27 Web Vital]", metric.name, metric.value, metric.rating);
  });

  return (
    <p className="text-sm leading-[18px] text-[#8a8d91]">
      This client component reports Web Vitals to the browser console. In production, send these metrics to your analytics or logging service.
    </p>
  );
}
