<!-- Thank you for wanting to contribute to sPhil! 🧙 🦉 -->
<!-- We would like to keep our code and writing as neat and tidy as possible, and would appreciate if you could verify the following checklist if you are submitting philosophical or literary content -->

## PR Author's Note

<!-- Write your PR text here -->

## Checklist

-   [ ] Docs contribution (philosophy, literature, content). Leave **unchecked** for <code>code</code> contribution.

    -   [ ] **REQUIRED** I accept that my writing is submitted under the [ATTRIBUTION-NONCOMMERCIAL-SHAREALIKE 4.0 INTERNATIONAL](https://creativecommons.org/licenses/by-nc-sa/4.0/), which, briefly put, prohibits commercial re-use of the content, but allows sharing, remixing and building upon the material insofar as attribution is given (see [legal code](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.en)), and in this regard I understand that my writing is open to be modified, remixed and build upon by others in the sPhil community within the `systemphil/sphil` project in future perpetuity.
    -   [ ] **REQUIRED** I have followed the [formatting guidelines](https://github.com/systemphil/sphil/blob/dev/src/pages/contributing/formatting/basic-markdown.md) and verified there are no formatting bugs. [Try markdown preview here](https://markdownlivepreview.com/).
    -   [ ] **REQUIRED** I have followed the [MLA citation style](https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_formatting_and_style_guide.html).
    -   [ ] **REQUIRED** I have added or verified title and description metadata at the very top of the file. Example:

        ```md
        ---
        title: Hegel Guides
        description: Learn about the philosophy of G. W. F. Hegel
        ---
        ```

    -   [ ] My article is a stub or I want to actively encourage contribution, I've added the Stub component to the bottom of my content but _before_ the bibliography:

        ```ts
        import Stub from "@/components/Stub";

        <Stub />;
        ```

    -   [ ] **REQUIRED** I have added, verified or extended a bibliography. This is added before the authors section and follows MLA guidelines. Example:

        ```mdx
        ## Works Cited

        <div className="text-sm">
            - Hegel, Friedrich Georg Wilhelm. _The Science of Logic_. Translated
            by George di Giovanni, Cambridge University Press, 2010. - Kant,
            Immanuel. _The Critique of Pure Reason_. Edited by Paul Guyer and
            Allen W. Wood, Cambridge University Press, 1998.
        </div>
        ```

    -   [ ] I have signed the document with my name/username under either as `Authors`, `Editors` or `Contributors`.

        > Use **Authors** if you have created and substantially added content.  
        > Use **Editor** if you have made substantial edits or review.  
        > Use **Contributor** if you have made minor edits, reviews or contributions.  
        > If you've done multiple, pick the most weighted: Author > Editor > Contributor.  
        > If you prefer to remain anonymous, that's fine too, but note that a record of your contributions based on your GitHub username will exist here in the codebase.

        ```md
        // Bibliography goes here

        ---

        **Authors**  
        Ahilleas Rokni (2024), Tom Bombadil (2025)

        **Contributors**  
        Filip Niklas (2024), Boromir (2025)
        ```

    -   [ ] If the article makes use of footnotes, I have checked that `**Notes**` is exactly the very last item in the file.

-   **If Docs contribution is unchecked:** Code contribution ([Apache version 2 license](https://www.apache.org/licenses/LICENSE-2.0.txt))
      <details>

    All code apart of what is inside `src/pages/**` (excluding `/contributing/**`, `_app.mdx`, `_document.tsx`, `_meta.json`, `acknowledgements.mdx`, `index.mdx`, `privacy.mdx`, `team.mdx`, `terms.mdx`) is subject to Apache version 2 license. Basically, anything outside of content, literature, philosophy.

      </details>
