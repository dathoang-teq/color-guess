import { type FC, useEffect } from "react";
import { useBlocker } from "react-router";

const TestPopState: FC = () => {
  const blocker = useBlocker(true);

  useEffect(() => {
    if (blocker.state !== "blocked") return;

    const confirmed = window.confirm(
      "You have unsaved changes. Are you sure you want to leave?"
    );
    if (confirmed) {
      blocker.proceed();
    } else {
      blocker.reset();
    }
  }, [blocker]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-center text-3xl font-bold text-gray-800">
        Test Pop State
      </h1>
      <p className="text-center text-gray-600">
        This page listens to{" "}
        <code className="rounded bg-gray-100 px-1">popstate</code> and{" "}
        <code className="rounded bg-gray-100 px-1">beforeunload</code> events.
        <br />
        Clicking the browser <strong>back</strong> or <strong>forward</strong>{" "}
        button, or closing/refreshing the tab, will trigger a confirmation
        warning.
      </p>
      <div className="rounded-lg border border-dashed border-gray-400 p-6 text-center text-gray-500">
        Try pressing the browser <strong>Back</strong> or{" "}
        <strong>Forward</strong> button, or refreshing/closing the tab.
      </div>
    </div>
  );
};

export default TestPopState;
