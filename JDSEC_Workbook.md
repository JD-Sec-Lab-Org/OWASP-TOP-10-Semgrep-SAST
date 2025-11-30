
# JDSEC Academy – DevSecOps / OWASP Training Workbook

This workbook accompanies the **JDSEC Academy Training Workspace** demo site.

> This is DevSecOps / OWASP mature CI/CD and Web App Training demo website by jdsecAcademy.

---

## 1. Login & Sessions

### Scenario
You have access to a shared lab account. The workspace uses cookie-based sessions.

### Objectives
- Log in and capture your session information.
- Identify how the session is tracked.
- Discuss what might happen if session identifiers are predictable or not protected.

### Tasks
1. Navigate to `/login`.
2. Sign in with the provided demo credentials.
3. Open browser developer tools and inspect the **Application → Cookies** panel.
4. Note the name, format and properties of the session cookie.
5. Consider:
   - Can this cookie be read by JavaScript?
   - Is it bound to HTTPS only?
   - Would rotating the cookie on login improve security?

---

## 2. Training Center – Enrollment Flow

### Scenario
The Training Center lets users mark interest in courses.

### Objectives
- Observe how enrollments are triggered.
- Reason about what happens if external sites can trigger the same action.

### Tasks
1. From the dashboard, go to **Training Center**.
2. Click on one of the course enrollment links.
3. Observe which network request is sent (Network tab).
4. Note:
   - HTTP method used (GET or POST)
   - Whether any CSRF protection is visible (tokens, headers).
5. Think about how a third-party website might cause a user’s browser to hit that URL without their knowledge.

---

## 3. People Directory – Search

### Scenario
The Directory provides a convenient way to search users by email.

### Objectives
- Understand how search terms are sent to the server.
- Consider what could go wrong if search terms are not handled safely.

### Tasks
1. Navigate to the **Directory**.
2. Enter different fragments of email addresses and search.
3. Watch the request to `/api/directory` in the Network tab.
4. Capture the full URL including the `term` parameter.
5. Discuss:
   - What if the term contains special characters like `'` or `%`?
   - How might the server implement this search internally?

---

## 4. Announcements – Rich Messages

### Scenario
Announcements allow staff to share formatted updates with others.

### Objectives
- Explore how messages are stored and displayed.
- Identify risks of rendering rich content directly.

### Tasks
1. Navigate to **Announcements**.
2. Post several messages, including:
   - Plain text
   - Text with basic HTML (e.g., `<b>bold</b>`)
3. Observe how the messages are rendered on the page.
4. Consider:
   - Is the HTML you enter preserved as-is?
   - What happens if more complex HTML is submitted?

---

## 5. Account Settings – Profile Updates

### Scenario
Account Settings let users update their email and display name.

### Objectives
- Understand how account changes are sent to the server.
- Think about how the server decides which account to update.

### Tasks
1. From **My Profile**, navigate to **Account Settings**.
2. Inspect the form fields: user id, email, name.
3. Modify the values and click **Save changes**.
4. Watch the request to `/api/account/update` in the Network tab.
5. Reflect:
   - How is the target account identified?
   - Where is the user id coming from?

---

## 6. Support → Connection Diagnostics

### Scenario
Support staff can run basic connectivity checks from inside the portal.

### Objectives
- Understand how the diagnostics feature sends commands to the backend.
- Consider what happens if user input is passed into system tools.

### Tasks
1. Navigate to **Support → Connection diagnostics**.
2. Enter a hostname (e.g., `127.0.0.1`) and run the check.
3. Observe the response output shown on the page.
4. Look at the request URL (Network tab) to see how the host is sent to `/api/support/diagnostics`.
5. Think:
   - What backend command might be used to generate this output?
   - What are the risks if that command uses the host value directly?

---

## 7. Support → Endpoint Tester

### Scenario
Integrations team uses the Endpoint Tester to quickly check outgoing connectivity to HTTP endpoints.

### Objectives
- See how the application performs outbound HTTP requests on behalf of a user.
- Consider how this can be abused to access internal or unintended addresses.

### Tasks
1. Navigate to **Support → Endpoint tester**.
2. Enter a public URL (such as a known website) and inspect the returned response snippet.
3. Observe the request to `/api/support/webhook-proxy` in the Network tab.
4. Discuss:
   - What prevents a user from targeting internal addresses instead of public ones?
   - If the application has access to internal-only services, what could be exposed?

---

## 8. Security Console – Logs & Diagnostics

### Scenario
The Security Console displays recent diagnostic data.

### Objectives
- Review what kind of information is shown.
- Evaluate whether any details appear overly sensitive.

### Tasks
1. Navigate to **Security → Security Console**.
2. Review the data returned on the page.
3. Identify:
   - Environment details
   - Any example keys or tokens
   - Any user activity information
4. Consider:
   - Which parts of this data could help an attacker?
   - How might log exposure impact confidentiality?

---

## 9. Open Redirect Behaviour

### Scenario
Users are sometimes sent login links that return them to a specific area of the workspace after sign-in.

### Objectives
- Observe how the login page uses the `next` parameter.
- Recognize the risks of sending users to arbitrary URLs after authentication.

### Tasks
1. Manually visit a URL of the form:
   - `/login?next=/dashboard`
2. Sign in and verify that the application returns you to the dashboard.
3. Experiment with other values for the `next` parameter, including full URLs.
4. Discuss:
   - Should the application allow redirecting to arbitrary external sites?
   - How might this be misused in phishing or social engineering scenarios?

---

## 10. Putting It All Together

### Objectives
- Think like an attacker moving through multiple weaknesses.
- Propose how DevSecOps practices and OWASP guidance help strengthen this system.

### Tasks
1. Choose one feature and map out how it could be misused or chained with others.
2. For each step, decide which secure coding or configuration practice would help:
   - Input validation
   - Output encoding
   - Authentication checks
   - Authorization checks
   - Logging and monitoring
   - Security testing in CI/CD (SAST, DAST, SCA, etc.)
3. Present a short improvement plan describing:
   - Quick fixes
   - Medium-term refactors
   - Longer-term process changes (e.g., threat modeling, security gates in CI/CD)

---
