# 🧑‍💻 Code Review Checklist


**Reviewer:** [Your Name]
**Pull Request #:** [PR Number]
**Branch Merging:** [Source Branch Name] -> [Target Branch Name]

---

## 🟢 Functionality & Quality

* **Logic:** Does the code correctly implement the intended feature or fix the reported bug?
    * [ ] Yes / [ ] No
* **Tests:** Are new tests included or existing tests updated to cover the new logic? (Required tests: Functional, Smoke)
    * [ ] Yes / [ ] No / [ ] N/A
* **Clarity:** Is the code easy to read, well-organized, and sufficiently commented?
    * [ ] Yes / [ ] No
* **Efficiency:** Is there any obvious room for performance improvement or simplification?
    * [ ] Yes / [ ] No / [ ] N/A

## 🔒 DevOps & Standards

* **CI/CD Impact:** Does this change break any part of the CI/CD pipeline (e.g., Dockerfile, workflows)?
    * [ ] No / [ ] Yes
* **Dependencies:** Are all new packages necessary, and have they been installed as the correct type (`dependencies` vs. `devDependencies`)?
    * [ ] Yes / [ ] No / [ ] N/A
* **Security:** Are there any secrets or hardcoded sensitive values (like ports or credentials)?
    * [ ] No / [ ] Yes

---

## 💬 Summary & Final Decision

**Overall Impression:** [Write a brief summary of the changes and the quality]

**Required Changes (If Any):**
1.  ...
2.  ...

**Decision:**
-   [ ] **Approve** (Ready to merge)
-   [ ] **Request Changes** (Needs work before merging)