---
title: Privacy Policy
lang: en
permalink: /privacy
alternate: /bn/privacy
---

# LiquidLyf Privacy Policy

**Effective date:** 15 November 2026 · [বাংলা](/bn/privacy)

LiquidLyf is a free app that connects blood donors with people who need blood in Bangladesh. You trust
us with your phone number and your blood group, so we collect as little as we can, show it to as few
people as we can, and explain everything here in plain words.

**In short:**
- Your phone number is **never shown publicly**. A requester sees it only if you offer to donate for
  their request, and you see a requester's number only after you offer, while your offer is active.
- We don't sell your data, we don't show ads, and we don't use advertising or analytics trackers.
- You can delete your account and its data at any time, in the app or by email.

## 1. Who we are

LiquidLyf is an open-source project run by volunteers. The app is published by **the LiquidLyf maintainers**
(Bangladesh), who are responsible for your data under this policy.

**Privacy contact:** liquidlyf@gmail.com (please write "Privacy" in the subject).

The app's source code is public at <https://github.com/liquidlyf/LiquidLyf>, so anyone can check what
it does with your data.

## 2. What we collect

**When you create an account**
- Your email address, and how you sign in (email and password, Google, or both). If you use Google, Google
  shares your name, email address and profile picture link with us. We don't show the picture.
- Your password is handled by Google's Firebase Authentication. We never see it.
- That you are 18 or older and accepted these terms, with the date and the version you accepted.

**Your profile**
- Full name, phone number, blood group.
- Gender and birth year. We use them only to check whether you can donate and to count your rest
  period after a donation. They are never shown to other users.
- Whether you weigh at least 45 kg (yes or no).
- Your area: division, district, and upazila or city corporation.
- Whether you are available to donate, and the date of your last donation.
- Whether you chose to be listed as a donor, and when you chose it.
- Your app language.

**When you use the app**
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

**From your phone**
- **Push notifications:** your phone subscribes to notification "topics" named after your area and
  blood group (for example, "Savar, B+"), through Google's Firebase Cloud Messaging. We don't
  store a device token. You can stop alerts at any time (section 7).
- **App Check:** Google Play services checks that requests come from the genuine LiquidLyf app on a
  real phone. This helps us spot bots and fake apps.
- **Crash reports:** if the app crashes, Firebase Crashlytics receives the technical details: phone
  model, Android version, app version, what the app was doing and a random installation ID. They
  contain no names, phone numbers or blood groups.

**We don't collect** your contacts, photos, files, exact location, call logs or SMS messages. We never
ask for your national ID (NID).

## 3. Why we use it

| Purpose | Data used |
|---|---|
| Finding donors for a blood request, and alerting them | Blood group, area, availability, rest period, the request |
| Letting a donor and a requester call each other | Phone numbers, only after a donor offers |
| Counting your rest period and reminding you when you can donate again | Gender, birth year, last donation date |
| Running your account and showing the app in your language | Email, sign-in method, language |
| Keeping people safe: stopping scams, fake requests and harassment | Reports, blocks, counters, App Check, flagged words such as payment requests |
| Fixing crashes | Crash reports |

We use your data only for these purposes. Your data is never used for advertising and never sold.

## 4. Who can see what

| Your data | Who can see it |
|---|---|
| Full name | You. Others see only your first name and last initial ("Rahim K.") |
| Email address | Only you |
| Phone number | Only you, **plus** the requester of a request you offered to donate for |
| Blood group and area | Other signed-in users, if you chose to be listed as a donor or when you post or offer on a request |
| Whether you're available to donate, and when you last used the app | Other signed-in users, if you chose to be listed as a donor. Find donors shows only available donors, and shows "Active this week" instead of a date |
| Gender, birth year, weight answer | Only you. Others may see "can donate now" or "can donate in N days" |
| Last donation date | Only you. Others see only "can donate now" or "in N days" |
| Donation history | You see all of it. Others see only how many times you donated |
| Your badges | Only you |
| A request's blood group, units, hospital, area, urgency and notes | Signed-in users with a verified email |
| A request's contact name and phone, patient name and ward | The requester, and donors whose offer for that request is still active or who donated. A donor loses access when they withdraw the offer or the requester declines it |
| Reports you send | Only the LiquidLyf moderators. The person you report isn't told who reported them |

**Moderators** are a small number of volunteers chosen by the maintainers. They can see account
details when they need to review a report or help with a support request, and their actions are logged.

**Please share only what's needed.** When you post a request for someone else, add the patient's
name and ward only if the patient or their family agrees.

## 5. Service providers

We use a few services to run LiquidLyf. They process data for us and only on our instructions.

| Provider | What it does for LiquidLyf | Where |
|---|---|---|
| Google Firebase: Authentication, Cloud Firestore, Cloud Messaging, Crashlytics, Remote Config, App Check | Sign-in, the database, notifications, crash reports, app settings, abuse protection | The database is in Mumbai, India. Sign-in, notifications and crash reports may be processed in other countries, including the United States |
| Cloudflare Workers | Sends the request alerts to donors. When your app asks it to, it receives your user ID, the request ID, the donor's user ID for a notification about an offer or an ask, and, like any web server, your IP address. It stores none of them. A maintainer fixing a problem can watch the calls live, with the IP address and its approximate location; that live view isn't saved. To stop abuse, Cloudflare counts each user's calls for 60 seconds, then forgets them. Its technical logs contain no names, phone numbers or user IDs | Cloudflare's worldwide network |
| GitHub | Hosts the app download, this website and the source code. It sees your IP address when you visit | United States and worldwide |

Their own privacy policies: [Google](https://policies.google.com/privacy) ·
[Firebase](https://firebase.google.com/support/privacy) ·
[Cloudflare](https://www.cloudflare.com/privacypolicy/) ·
[GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement).

Your data leaves Bangladesh when these services process it. We chose a database location close to
Bangladesh, and each provider protects data in transit and at rest.

We share data with authorities **only** when Bangladeshi law requires it, or to protect someone from
serious harm.

## 6. How long we keep it

| Data | How long |
|---|---|
| Your account and profile | Until you delete your account |
| An open request | Until it is fulfilled, cancelled or expires (one day after the "needed by" time) |
| Closed requests and offers | Visible to the people involved for 90 days. Then all contact details, donors' phone numbers, messages, notes and the reason for closing are deleted. What stays is the short names (such as "Rahim K."), blood group, area, date and outcome |
| Your donation history | Until you delete your account |
| Your past requests and offers, after you delete your account | Kept as history without your name, phone number, notes or messages, so other people's records stay complete ([details](/delete-account)) |
| In-app notifications | 60 days |
| Reports and moderators' action log | 1 year, to prevent repeat abuse |
| Crash reports | 90 days |
| Earlier versions of changed or deleted data | Up to 1 hour, readable only by the project's administrators. We keep no backups |

## 7. Your choices and rights

- **See and correct** your profile at any time in the app.
- **Stop being listed as a donor:** Settings → Privacy. Your donor card is removed at once, and you
  stop getting request alerts.
- **Pause alerts:** turn off "Available to donate", or turn off notifications in Android settings.
- **Withdraw an offer** at any time before you donate. You then no longer see the request's contact
  details. The requester can still see the number you
  shared with that offer until it is deleted, 90 days after the request closes (section 6), and may
  have written it down.
- **Block someone:** you stop seeing their requests, and they can't ask you to donate or offer on
  your requests. If they had already offered, decline that offer, so they stop seeing your
  request's contact details. Once their donation is recorded, the offer can't be declined.
- **Delete your account:** in the app under Settings → Delete account, or without the app at
  [liquidlyf.github.io/delete-account](/delete-account).
- **Get a copy of your data,** or ask any question about it: email liquidlyf@gmail.com from the email
  address of your account. We reply within 30 days.

Bangladesh's Personal Data Protection Act, 2026 gives you rights to access, correct and erase your data,
to get a copy of it, and to withdraw consent. If you think we have handled your data wrongly, please
tell us first, so we can fix it. You can also complain to the data protection authority set up under
that Act.

## 8. Security

- All connections between the app, our services and Google use encryption (HTTPS/TLS).
- Database security rules decide who may read and write each piece of data. They are public in our
  source code, and automated tests check them on every change.
- App Check helps us recognise requests that don't come from the genuine app.
- Moderator access needs a special permission that only maintainers can grant.

No system is perfect. If a breach puts you at risk, we will tell you in the app and by email, and
inform the authorities when the law requires it. To report a security problem, see our
[security policy](https://github.com/liquidlyf/LiquidLyf/security/policy).

## 9. Age limit

LiquidLyf is only for people aged **18 or older**. We don't knowingly collect data from children. If you
believe a child has an account, email us and we will delete it.

## 10. Changes to this policy

When we change this policy, we update the effective date at the top. For important changes, the app
asks you to read and accept the new version. Earlier versions stay in the website's public history.

## 11. Contact

Email **liquidlyf@gmail.com**, with "Privacy" in the subject. We reply within 30 days, usually much sooner.

**LiquidLyf is not an emergency service.** If someone needs blood urgently, contact the hospital or a
licensed blood bank now, or call 999.
