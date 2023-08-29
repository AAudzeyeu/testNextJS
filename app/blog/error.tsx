"use client";

import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export default function ErrorWrapper({error}: {error: Error}) {
    return <h1>Oops!!! {error.message}</h1>
}