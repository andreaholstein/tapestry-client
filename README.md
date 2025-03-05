# Tapestry

## Connect the Threads of Your Life

### Overview

Tapestry is a social platform designed to foster tight-knit communities through interactive group spaces, private group chats, and shared scrapbooks. Unlike mainstream social media platforms that focus on large-scale broadcasting, Tapestry prioritizes meaningful interactions in small, dedicated hubs.

## Goals & Objectives

### Primary Goals

- Enable users to join and interact in multiple communities.
- Facilitate seamless sharing of text, images, and other media within community hubs.
- Provide a scrapbook-style feed for preserving memories and announcements.
- Encourage engagement through group chats and discussions.

## Key Features

### 1. User Authentication & Onboarding

- Sign-up/Login via email.
- Profile creation with profile picture, bio, and interests.
- Option to join or create communities during onboarding.

### 2. Communities & Hubs

- Users can view all joined communities in a dashboard.
- Each community has a unique feed structured as a scrapbook or announcement board.
- Users can create posts (text, images, videos, and links).

### 3. Scrapbook-Style Feed

- Posts are displayed in a dynamic, visually engaging format (collage-like).
- Users can react, comment, and tag members in posts.
- Pinning important posts or announcements.

## User Stories

### As a User, I want to:

- Sign up and log in with ease.
- See all my communities on the homepage.
- Post text, images, and videos in my community’s scrapbook.
- Engage with other members via likes, comments, and reactions.
- Communicate in real-time through group chats.
- Join new communities or create my own.
- Control my privacy settings and notifications.

### As a Community Moderator, I want to:

- Approve or decline new members.
- Manage posts and moderate discussions.
- Set rules and guidelines for engagement.

## Tech Stack

- **Frontend:** React, JavaScript
- **Backend:** Node.js (Express)
- **Database:** MySQL
- **Authentication:** Rolled our own Auth

## Endpoints

### communities/:id

{
"id": "142f3d8e-6219-4d66-a2ff-80c98c9b2912",
"title": "Coffeeshops",
"topic": "Cafes and Coffee Lovers",
"photo": "images/COFFEESHOP\*1.jpg",
"alt_text": "A cozy coffee shop corner",
"created_at": "2025-02-28T01:53:11.000Z",
"updated_at": "2025-02-28T01:53:11.000Z"
}

### communities/post

{
"message": "Community created successfully and user added.",
"community": {
"id": "95fbcd4e-e909-478e-bf0c-ca470e2a344f",
"title": "Coffeeshops",
"topic": "Cafes and Coffee Lovers",
"photo": "images/COFFEESHOP_1.jpg",
"alt_text": "A cozy coffee shop corner",
"created_at": "2025-03-04T20:22:16.000Z",
"updated_at": "2025-03-04T20:22:16.000Z"
}
}

### posts/get

{
"id": "df6e9602-91f8-4690-a658-4ea65c45fdb7",
"post\*text": "Excited for the upcoming Coldplay concert! Who's going?",
"post*media": "images/CONCERTPHOTO_1.jpg",
"created_at": "2025-02-28T01:53:11.000Z",
"community_id": "142f3d8e-6219-4d66-a2ff-80c98c9b2912",
"user_email": "\*\*\*@*\*\*.com"
}

### posts/post

{
"id": "32124de1-5873-46ef-9e96-c584be789b33",
"post*text": "Excited for the upcoming Coldplay concert! Who's going?",
"post_media": null,
"created_at": "2025-03-04T18:39:07.000Z",
"community_id": "142f3d8e-6219-4d66-a2ff-80c98c9b2912",
"user_email": "\*\**@\_\*\*.com",
"first_name": "Alice",
"last_name": "Brown",
"username": "alice_brown",
"profile_picture": "images/PROFILEPHOTO_6.jpg"
}

### posts/delete/:id

{
"message": "Post deleted successfully"
}

### userRoutes/profile

{
"id": "8536449b-10e1-433f-b723-eccb03827cae",
"first*name": "John",
"last_name": "Doe",
"username": "john_doe",
"email": "\*\**@_**.com",
"password": "**_",
"profile\*picture": "images/PROFILEPHOTO_1.jpg",
"created_at": "2025-02-28T01:53:11.000Z",
"updated_at": "2025-02-28T01:53:11.000Z"
}

### userRoutes/register

{
}

### userRoutes/login

{
"authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg1MzY0NDliLTEwZTEtNDMzZi1iNzIzLWVjY2IwMzgyN2NhZSIsInN1YiI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NDExMTQwNjAsImV4cCI6MTc0MTE0Mjg2MH0.JCGb1LWiROqMdDeITvqcdGV6o6x3QDaSShKrt0yXfmA"
}

### userRoutes/get

{
"id": "8536449b-10e1-433f-b723-eccb03827cae",
"first*name": "John",
"last_name": "Doe",
"username": "john_doe",
"email": "***@**\_.com",
"password": "$2b$08$KgP0JJeGzS5sL7mj71r1c.xUCfiIJ/8tuBflCMHfxPj2N8COuRK12",
"profile_picture": "images/PROFILEPHOTO_1.jpg",
"created_at": "2025-02-28T01:53:11.000Z",
"updated_at": "2025-02-28T01:53:11.000Z"
}

### user_communites/get

[
{
"id": "142f3d8e-6219-4d66-a2ff-80c98c9b2912",
"title": "Coffeeshops"
},
{
"id": "f35cfbd1-79b7-4ce1-af0f-cc0cb3be8c93",
"title": "Web Developers"
}
]

## Wireframes & UI/UX Considerations

- **Home Page:** Grid or list view of communities.
- **Community Page:** Scrapbook-style layout, pinned posts at the top.
- **Post Creation:** Easy-to-use editor for adding text, images, and selecting a community.
- **Profile Page:** At-a-glance profile view with user communities.

## Roadmap

### Phase 1: MVP Development

- User authentication.
- Community creation & management.
- Scrapbook-style feed.

### Phase 2: Engagement Features

- Group chats.
- Post reactions & comments.
- Improved media handling.

### Phase 3: Growth & Moderation

- Privacy settings & moderation tools.
- Recommendation engine for communities.
- Performance optimizations.

## Success Metrics

- **User Retention Rate:** Weekly/Monthly active users.
- **Engagement Rate:** Posts, comments, reactions per user.
- **Community Growth Rate**.
- **User Feedback & Satisfaction Ratings**. |

## Version 2 Enhancements

### Additional Features

- **User Authentication & Onboarding:** Option to join or create communities during onboarding.
- **Scrapbook-Style Feed:** Pinning important posts or announcements.
- **Group Chats & Messaging:**
  - Direct messages between members.
  - Reactions.
  - Message Editing.
  - Link Previews.
  - Voice & Video Calls.
- **Privacy & Moderation:**
  - Public and private communities.
  - Moderation tools (remove posts, ban users, manage permissions).
  - Advanced notification settings.
- **Community Moderation:**
  - Approve or decline new members.
  - Manage posts and moderate discussions.
  - Set rules and guidelines for engagement.

## About The Authors

### Andrea Holstein

### Product Owner | Full-stack Developer

https://www.linkedin.com/in/andrea-holstein/
https://github.com/andreaholstein/

### Khushi Parekh

### Full-stack Developer | UX/UI Designer

https://www.linkedin.com/in/khushi-parekh-uxdeveloper/
https://github.com/khushi4541

### Rebecca Scott

### Full-stack Developer

https://www.linkedin.com/in/rebeccascott01/
https://github.com/shortcircuits94

### Savannah Martin

### Full-stack Developer

https://www.linkedin.com/in/savannahmc/
https://github.com/savannahmartin
