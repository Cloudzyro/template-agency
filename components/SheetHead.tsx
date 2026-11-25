// Opens a section like the title block on a drawing sheet:
// a full-width rule, the section name on the left and a note on the right.
export default function SheetHead({ title, note, id }: { title: string; note?: string; id?: string }) {
  return (
    <div className="sheet-head">
      <h2 id={id} className="meta text-[15px] text-ink">
        {title}
      </h2>
      {note && <p className="meta text-muted">{note}</p>}
    </div>
  );
}
