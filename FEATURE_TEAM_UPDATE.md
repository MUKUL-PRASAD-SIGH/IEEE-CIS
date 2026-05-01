# Feature Update: Team, Past Chairs, and Execom Members

## Overview
Updated the `Team.tsx` component to include the Core Committee for 2026, a Past Chairs section, and a newly requested Execom Members (Bangalore Chapter) section, fulfilling the user's latest requirements.

## Changes Made
1. **Core Committee 2026:**
   - Replaced `execom` with `coreCommittee`.
   - Updated the roles to include: Chair (Dr Sumana Maradithaya), Vice Chair (Dr Megha Arakeri), Secretary (Dr. Manjunath Kounte), Joint Secretary (Dr Kumaresh Sheelavat), and Treasurer (Dr Anitha P).
   - Added a new role `Joint Secretary` to the `Role` type and `roleColors` dictionary.

2. **Past Chairs:**
   - Replaced `coreTeam` with a new array `pastChairs`.
   - Added Dr Y V S Lakshmi (2014-16), Anandi Giridharan (2016-2018), Dr Vijaya Kumar B P (2018-2022), Dr Megha Arakeri (2022-2024), and Dr Sumana Maradithaya (2024-26) to the past chairs list.
   - Updated the `TeamMember` interface to make `department` and `college` optional, and conditionally render these fields within `MemberCard`.

3. **Execom Members (Bangalore Chapter):**
   - Added an `execomMembers` array containing 15 new executive members with their names, affiliations, and colors.
   - Inserted a newly designed grid section to list out these 15 members between the Core Committee and Past Chairs sections.

4. **Chapter Role Description:**
   - Added a descriptive block about the role of the IEEE CIS Bangalore Chapter, highlighting its strong focus on the AI ecosystem and its key focus areas (AI, ML, DL, Neural Networks, Fuzzy Systems, etc.), ensuring the descriptive copy matches the latest user requirements.

## UI Updates
- Updated the section headers and mapped variables in the JSX blocks to successfully reflect all changes and accurately present the 2026 core committee, 15 execom members, and past chairs.
- Included subtle animation delays inside the mappings for a seamless scrolling experience.

These changes ensure the live website accurately displays the comprehensive team structure and the mission of the Bangalore Chapter.
