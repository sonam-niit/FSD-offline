# Conditional types in typeScript

- T extends U ? X : Y
- If T is assignable to U -> use type X
- otherwise use type Y

# Utility Types

- Utility Types help you to transform existing data type instead of rewriting new one.

- Partial<T>
    + good for APIs Patch Request
    + form Editing

- ReadOnly:
    - make properties readonly

- Pick : pick specific fields

- Omit: Remove Specific Properties