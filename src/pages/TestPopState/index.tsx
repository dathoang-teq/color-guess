import { type FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const TestPopState: FC = () => {
  const navigate = useNavigate();
  const hasChanges = useRef(true);

  useEffect(() => {
    // Push an extra history entry so we can intercept the back action
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      if (hasChanges.current) {
        const confirmed = window.confirm(
          "You have unsaved changes. Are you sure you want to leave?"
        );
        if (confirmed) {
          hasChanges.current = false;
          navigate(-1);
        } else {
          // Re-push so back/forward stays interceptable
          window.history.pushState(null, "", window.location.href);
        }
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasChanges.current) {
        e.preventDefault();
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

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
