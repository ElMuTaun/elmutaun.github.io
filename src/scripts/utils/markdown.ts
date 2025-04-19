
// Return true if status is draft
export function checkMDDraftStatus(draft_status: boolean | null | undefined): boolean {
  if (draft_status === undefined) return false;
  if (draft_status === null) return true;
  if (typeof(draft_status) === "boolean") return draft_status;
  throw new Error("Unreachable branch");
}
