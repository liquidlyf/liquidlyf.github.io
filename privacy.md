---
title: Privacy Policy
lang: en
permalink: /privacy
description: What data LiquidLyf collects, who can see it, how long it is kept, and how to delete it.
alternate: /bn/privacy
---

# LiquidLyf Privacy Policy

**Effective date:** 20 November 2026

LiquidLyf is a free app that connects blood donors with people who need blood in Bangladesh. You trust
us with your phone number and your blood group, so we collect as little as we can, show it to as few
people as we can, and explain everything here in plain words.

<div class="glance" markdown="1">

## At a glance
- Your phone number is **never shown publicly**. A requester sees it only if you offer to donate for
  their request, and you see a requester's number only after you offer, while your offer is active.
- We don't sell your data, we don't show ads, and we don't use advertising or analytics trackers.
- You can delete your account and its data at any time, in the app or by email.

</div>

<nav class="toc" id="contents" aria-label="On this page"><h2>On this page</h2><ol role="list"><li><a href="#s1">1. Who we are</a></li><li><a href="#s2">2. What we collect</a></li><li><a href="#s3">3. Why we use it</a></li><li><a href="#s4">4. Who can see what</a></li><li><a href="#s5">5. Service providers</a></li><li><a href="#s6">6. How long we keep it</a></li><li><a href="#s7">7. Your choices and rights</a></li><li><a href="#s8">8. Security</a></li><li><a href="#s9">9. Age limit</a></li><li><a href="#s10">10. Changes to this policy</a></li><li><a href="#s11">11. Contact</a></li></ol></nav>

<h2 id="s1">1. Who we are</h2>

LiquidLyf is an open-source project run by volunteers. The app is published by **the LiquidLyf maintainers**
(Bangladesh), who are responsible for your data under this policy.

**Privacy contact:** [liquidlyf@gmail.com](mailto:liquidlyf@gmail.com?subject=Privacy) (please write "Privacy" in the subject).

The app's source code is public at <https://github.com/liquidlyf/LiquidLyf>, so anyone can check what
it does with your data.

<p class="to-contents"><a href="#contents">Back to contents</a></p>

<h2 id="s2">2. What we collect</h2>

### When you create an account
- Your email address, and how you sign in (email and password, Google, or both). If you sign in with
  Google, your name, email address and profile picture link come from Google into your LiquidLyf
  account. The picture isn't shown anywhere in the app.
- Your password is handled by Google's Firebase Authentication. We never see it.
- That you are 18 or older and accepted these terms, with the date and the version you accepted.

### Your profile
- Your full name and phone number.
- Your area: division, district, and upazila or city corporation.
- Your blood group, if you add it. Donors need it.
- Your app language.

If you choose to become a donor, the app also asks for:
- Gender and birth year. We use them only to check whether you can donate and to count your rest
  period after a donation. They are never shown to other users.
- Whether you weigh at least 45 kg (yes or no).
- Whether you are available to donate, and the date of your last donation.
- Whether you chose to be listed as a donor, and when you chose it.

Until you choose to become a donor, the app doesn't ask for these. Until then, two of your settings are
simply off: being listed as a donor, and being available to donate. When you finish the donor steps,
your answers are saved to your account on LiquidLyf's server, even if you choose "Not now" at the last
step.

If you stop partway through the donor steps, the answers you gave so far are kept **only on your
phone**, so you don't have to answer again later. They aren't sent to LiquidLyf's server, and they
aren't included in your phone's backup (such as Google's). They're deleted from your phone when you
sign out, or once you finish the steps and they're saved to your account.

### When you use the app
- **Blood requests you post:** the patient's blood group, the blood component and number of units,
  the hospital and its area, how urgent it is, when the blood is needed, an optional condition (such as
  "surgery" or "dengue") and notes. The **contact person's name and phone number**, and optionally the
  patient's name and ward or bed, are kept separately and protected (see section 4).
- **Offers to donate:** your name as shown to others, your blood group, your phone number and an
  optional message, sent to the requester.
- **Your donation history:** date, blood component, hospital name, and whether it was confirmed through
  a request in the app.
- **Your in-app notifications,** the requests you chose to hide, and the people you blocked.
- **Badges:** "Rapid responder", if you offer to donate within 15 minutes of a request being posted.
- **Reports you send** about a request or a person: the reason and an optional note.
- **Counters** that protect against abuse, such as how many open requests you have, and the last
  donor you asked to donate (only you can see it).
- **When you last used the app,** updated at most once every 3 days.

### From your phone
- **Push notifications:** your phone subscribes to notification "topics" named after your area and
  blood group (for example, "Savar, B+"), through Google's Firebase Cloud Messaging. No device token
  from your phone is stored on LiquidLyf's server. You can stop alerts at any time (section 7).
- **App Check:** Google Play services checks that requests come from the genuine LiquidLyf app on a
  real phone. This helps us spot bots and fake apps.
- **Crash reports:** if the app crashes, Firebase Crashlytics receives the technical details: phone
  model, Android version, app version, what the app was doing and a random installation ID. They
  contain no names, phone numbers or blood groups.
- **Daily checks:** about once a day, the app downloads two small files from GitHub: the hospital
  list, and the details of the newest app version, so it can tell you when an update is available. As
  with any download, GitHub sees your phone's IP address. The app sends nothing else about you or
  your account with these checks. When you tap **Get the update**, the app downloads the new version
  from GitHub too, and GitHub again sees your IP address.

**We don't collect** your contacts, photos, files, exact location, call logs or SMS messages. We never
ask for your national ID (NID).

<p class="to-contents"><a href="#contents">Back to contents</a></p>

<h2 id="s3">3. Why we use it</h2>

<div class="table-wrap"><table>
<thead><tr><th scope="col">Purpose</th><th scope="col">Data used</th></tr></thead>
<tbody>
<tr><td>Finding donors for a blood request, and alerting them</td><td>Blood group, area, availability, rest period, the request</td></tr>
<tr><td>Letting a donor and a requester call each other</td><td>Phone numbers, only after a donor offers</td></tr>
<tr><td>Counting your rest period and reminding you when you can donate again</td><td>Gender, birth year, last donation date</td></tr>
<tr><td>If you aren’t listed as a donor, the app reminds you a few times, in a notification, that you can become a donor if you want</td><td>Whether you’re listed as a donor, the donor-step answers kept on your phone, and whether you have an open request (only this is checked in your account). The app makes these reminders on your phone, sends no new information to the server, and no separate information about the reminders is kept</td></tr>
<tr><td>Running your account and showing the app in your language</td><td>Email, sign-in method, language</td></tr>
<tr><td>Keeping people safe: stopping scams, fake requests and harassment</td><td>Reports, blocks, counters, App Check, flagged words such as payment requests</td></tr>
<tr><td>Fixing crashes</td><td>Crash reports</td></tr>
</tbody></table></div>

We use your data only for these purposes. Your data is never used for advertising and never sold.

<p class="to-contents"><a href="#contents">Back to contents</a></p>

<h2 id="s4">4. Who can see what</h2>

<div class="table-wrap"><table>
<thead><tr><th scope="col">Your data</th><th scope="col">Who can see it</th></tr></thead>
<tbody>
<tr><td>Full name</td><td>You. Others see only your first name and last initial (“Rahim K.”)</td></tr>
<tr><td>Email address</td><td>Only you</td></tr>
<tr><td>Phone number</td><td>Only you, <strong>plus</strong> the requester of a request you offered to donate for</td></tr>
<tr><td>Blood group and area</td><td>Other signed-in users, if you chose to be listed as a donor or when you post or offer on a request</td></tr>
<tr><td>Whether you’re available to donate, and when you last used the app</td><td>Other signed-in users, if you chose to be listed as a donor. Find donors shows only available donors, and shows “Active this week” instead of a date</td></tr>
<tr><td>Gender, birth year, weight answer</td><td>Only you. Others may see “Eligible now” or “Eligible in N days”</td></tr>
<tr><td>Last donation date</td><td>Only you. Others see only “Eligible now” or “Eligible in N days”</td></tr>
<tr><td>Donation history</td><td>You see all of it. Others see only how many times you donated</td></tr>
<tr><td>Your badges</td><td>Only you</td></tr>
<tr><td>A request’s blood group, units, hospital, area, urgency and notes</td><td>Signed-in users with a verified email</td></tr>
<tr><td>A request’s contact name and phone, patient name and ward</td><td>The requester, and donors whose offer for that request is still active or who donated. A donor loses access when they withdraw the offer or the requester declines it</td></tr>
<tr><td>Reports you send</td><td>Only the LiquidLyf moderators. The person you report isn’t told who reported them</td></tr>
</tbody></table></div>

**Moderators** are a small number of volunteers chosen by the maintainers. They can see account
details when they need to review a report or help with a support request, and their actions are logged.

**Please share only what's needed.** When you post a request for someone else, add the patient's
name and ward only if the patient or their family agrees.

<p class="to-contents"><a href="#contents">Back to contents</a></p>

<h2 id="s5">5. Service providers</h2>

We use a few services to run LiquidLyf. They process data for us and only on our instructions.

<div class="table-wrap"><table class="stack" role="table">
<thead role="rowgroup"><tr role="row"><th scope="col" role="columnheader">Provider</th><th scope="col" role="columnheader">What it does for LiquidLyf</th><th scope="col" role="columnheader">Where</th></tr></thead>
<tbody role="rowgroup">
<tr role="row"><td role="cell" data-label="Provider">Google Firebase: Authentication, Cloud Firestore, Cloud Messaging, Crashlytics, Remote Config, App Check</td><td role="cell" data-label="What it does for LiquidLyf">Sign-in, the database, notifications, crash reports, app settings, abuse protection</td><td role="cell" data-label="Where">The database is in Mumbai, India. Sign-in, notifications and crash reports may be processed in other countries, including the United States</td></tr>
<tr role="row"><td role="cell" data-label="Provider">Cloudflare Workers</td><td role="cell" data-label="What it does for LiquidLyf">Sends the request alerts to donors. When your app asks it to, it receives your user ID, the request ID, the donor’s user ID for a notification about an offer or an ask, and, like any web server, your IP address. It stores none of them. A maintainer fixing a problem can watch the calls live, with the IP address and its approximate location; that live view isn’t saved. To stop abuse, Cloudflare counts each user’s calls for 60 seconds, then forgets them. Its technical logs contain no names, phone numbers or user IDs</td><td role="cell" data-label="Where">Cloudflare’s worldwide network</td></tr>
<tr role="row"><td role="cell" data-label="Provider">GitHub</td><td role="cell" data-label="What it does for LiquidLyf">Hosts the app download, this website and the source code. It sees your IP address when you visit, and when the app does its daily checks (section 2)</td><td role="cell" data-label="Where">United States and worldwide</td></tr>
</tbody></table></div>

Their own privacy policies: [Google](https://policies.google.com/privacy) ·
[Firebase](https://firebase.google.com/support/privacy) ·
[Cloudflare](https://www.cloudflare.com/privacypolicy/) ·
[GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement).

Your data leaves Bangladesh when these services process it. We chose a database location close to
Bangladesh, and each provider protects data in transit and at rest.

We share data with authorities **only** when Bangladeshi law requires it, or to protect someone from
serious harm.

<p class="to-contents"><a href="#contents">Back to contents</a></p>

<h2 id="s6">6. How long we keep it</h2>

<div class="table-wrap"><table>
<thead><tr><th scope="col">Data</th><th scope="col">How long</th></tr></thead>
<tbody>
<tr><td>Your account and profile</td><td>Until you delete your account</td></tr>
<tr><td>An open request</td><td>Until it is fulfilled, cancelled or expires (one day after the “needed by” time)</td></tr>
<tr><td>Closed requests and offers</td><td>Visible to the people involved for 90 days. Then all contact details, donors’ phone numbers, messages, notes and the reason for closing are deleted. What stays is the short names (such as “Rahim K.”), blood group, area, date and outcome</td></tr>
<tr><td>Your donation history</td><td>Until you delete your account</td></tr>
<tr><td>Your past requests and offers, after you delete your account</td><td>Kept as history without your name, phone number, notes or messages, so other people’s records stay complete (<a href="/delete-account">details</a>)</td></tr>
<tr><td>In-app notifications</td><td>60 days</td></tr>
<tr><td>Reports and moderators’ action log</td><td>1 year, to prevent repeat abuse</td></tr>
<tr><td>Crash reports</td><td>90 days</td></tr>
<tr><td>Earlier versions of changed or deleted data</td><td>Up to 1 hour, readable only by the project’s administrators. We keep no backups</td></tr>
</tbody></table></div>

<p class="to-contents"><a href="#contents">Back to contents</a></p>

<h2 id="s7">7. Your choices and rights</h2>

- **See and correct** your profile at any time in the app.
- **Stop being listed as a donor:** Profile → ⚙ Settings → Privacy. Your donor card is removed at once, and you
  stop getting request alerts.
- **Pause alerts:** turn off "Ready to donate" on the Home screen or in Settings, or turn off
  notifications in Android settings.
- **Stop the reminders to become a donor:** tap "Don't remind me" on any reminder, or open Profile → ⚙
  Settings → Notifications and turn off "Reminders to become a donor". Once you finish the donor steps,
  they don't come any more. There are at most 7 in all, within about 4 months of creating your account,
  and then they stop.
- **Withdraw an offer** at any time before you donate. You then no longer see the request's contact
  details. The requester can still see the number you
  shared with that offer until it is deleted, 90 days after the request closes (section 6), and may
  have written it down.
- **Block someone:** you stop seeing their requests, and they can't ask you to donate or offer on
  your requests. If you block them from their offer on your request, that offer is declined too, so
  they stop seeing your request's contact details. Once their donation is recorded, the offer can't
  be declined.
- **Delete your account:** in the app under Profile → ⚙ Settings → Delete your account, or without the app at
  [liquidlyf.github.io/delete-account](/delete-account).
- **Get a copy of your data,** or ask any question about it: email [liquidlyf@gmail.com](mailto:liquidlyf@gmail.com?subject=Privacy) from the email
  address of your account. We reply within 30 days.

Bangladesh's Personal Data Protection Act, 2026 gives you rights to access, correct and erase your data,
to get a copy of it, and to withdraw consent. If you think we have handled your data wrongly, please
tell us first, so we can fix it. You can also complain to the data protection authority set up under
that Act.

<p class="to-contents"><a href="#contents">Back to contents</a></p>

<h2 id="s8">8. Security</h2>

- All connections between the app, our services and Google use encryption (HTTPS/TLS).
- Database security rules decide who may read and write each piece of data. They are public in our
  source code, and automated tests check them on every change.
- App Check helps us recognise requests that don't come from the genuine app.
- Moderator access needs a special permission that only maintainers can grant.

No system is perfect. If a breach puts you at risk, we will tell you in the app and by email, and
inform the authorities when the law requires it. To report a security problem, see our
[security policy](https://github.com/liquidlyf/LiquidLyf/security/policy).

<p class="to-contents"><a href="#contents">Back to contents</a></p>

<h2 id="s9">9. Age limit</h2>

LiquidLyf is only for people aged **18 or older**. We don't knowingly collect data from children. If you
believe a child has an account, email us and we will delete it.

<p class="to-contents"><a href="#contents">Back to contents</a></p>

<h2 id="s10">10. Changes to this policy</h2>

When we change this policy, we update the effective date at the top. For important changes, the app
asks you to read and accept the new version. Earlier versions stay in the website's public history.

<p class="to-contents"><a href="#contents">Back to contents</a></p>

<h2 id="s11">11. Contact</h2>

Email **[liquidlyf@gmail.com](mailto:liquidlyf@gmail.com?subject=Privacy)**, with "Privacy" in the subject. We reply within 30 days, usually much sooner.

**LiquidLyf is not an emergency service.** If someone needs blood urgently, contact the hospital or a
licensed blood bank now, or call 999.

<p class="to-contents"><a href="#contents">Back to contents</a></p>

