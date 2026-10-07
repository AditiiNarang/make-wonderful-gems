<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep editable portfolio content in a browser-safe data module, separate from presentation, so personal details can be updated consistently.
- Use the index route for the single-page portfolio with section anchors; all visual tokens and responsive rules live in the global stylesheet.
- Serve the uploaded résumé through its Lovable Assets pointer, avoiding binary source files in the repository.
