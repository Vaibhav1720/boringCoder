import React from 'react'
import Editor from "@monaco-editor/react";

function Monaco() {
    const [language,setLanguage]=React.useState("javascript")
        return (
        <Editor
            height="90vh"
            defaultLanguage={language}
            defaultValue="// some comment"
        />
        );
}

export default Monaco;