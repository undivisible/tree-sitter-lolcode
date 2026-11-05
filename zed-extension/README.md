# LOLCODE for Zed

Development extension for LOLCODE syntax highlighting. The grammar supports a
subset of LOLCODE 1.2 and does not yet implement all statement separators,
loops, or expressions.

To try it, clone this repository and use Zed's **Extensions: Install Dev
Extension** command to select the `zed-extension` directory. The manifest pins
the grammar independently of the checkout. No language server is included.

This directory is a scaffold, not a published extension. Before submitting it
to the Zed registry, test it in Zed, choose an extension repository and license,
update the manifest's repository and grammar pin, and follow Zed's publishing
guide. The registry submission and publication require owner authorization.
