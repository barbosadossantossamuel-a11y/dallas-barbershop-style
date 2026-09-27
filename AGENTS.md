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

## Project architecture

- Keep editable business copy, links, and service data centralized in `src/lib/site-content.ts` so future updates stay consistent across sections.
- Resolve Lovable CDN media pointers through the same-origin `/api/public/media` proxy, which safely streams the canonical published asset and avoids cross-domain blocking on hosts such as Vercel.
