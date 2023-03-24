const ANNOTATIONS_ENABLED = !process.env.DISABLE_ANNOTATIONS;

export function fieldPath(fieldPath) {
    if (!ANNOTATIONS_ENABLED) return null;
    return { 'data-sb-field-path': fieldPath };
}

export function objectId(objectId) {
    if (!ANNOTATIONS_ENABLED) return null;
    return { 'data-sb-object-id': objectId };
}
