<template>
    <main class="research-page">
        <v-container class="page-content py-8 py-md-12">
            <header class="page-header">
                <p class="kicker">RESEARCH</p>
                <h1>VR projects</h1>
                <p class="intro">
                    Research projects made through internships at research labs (Sedan SnT and ERPI).
                </p>
            </header>

            <article class="research-project featured-project">
                <div class="project-copy">
                    <h2>PTVR</h2>
                    <p class="project-description">
                        PTVR (Prompt To VR) is a tool made with Python and Unity that aims to turn a written or oral
                        testimony into a VR recreation of the action. The principle is as follows: the user provides a
                        prompt describing a scene, and a first LLM pass generates a list of all 3D objects present in
                        the scene. Their respective 3D Models are generated through AI. Then the testinmony is passed
                        through a LLM that generates a JSON summarizing the initial state of the scene. The testimony
                        and the JSON are then passed through another LLM in order to generate a JSON containing the
                        movements and transformations, which is necessary to reconstruct the timeline of the scene.
                        These JSONs are then used to generate a Unity build of the application which contains the scene
                        which can navigated in VR.
                    </p>
                    <p class="project-description">
                        The project was presented at the 2024 IEEE VR conference and led to a published paper:
                        <a href="https://ieeexplore.ieee.org/abstract/document/11353143" target="_blank"
                            rel="noopener noreferrer">Read the paper</a>
                    </p>

                </div>

                <div class="project-images" aria-label="PTVR project images">
                    <v-img src="/images/games/PTVR.png" alt="PTVR virtual reality scene reconstruction project"
                        class="project-image" contain></v-img>
                </div>

            </article>

            <article class="research-project text-project">
                <div class="project-copy">
                    <h2>VRSketcher2</h2>
                    <p class="project-description">
                        VRSketcher2 is a collaborative sketching application for virtual reality. It allows the user to
                        draw with shapes. It was created as a means to study User Experience.
                        It is a Vr Unity App that supports Multiplayer through websockets. It is managed by a JavaScript
                        Server that handles the authentification and communication between the clients.
                        There is also a web client made in JavaScript meant to monitor the experiments. It represents
                        the VR environment in real time through ThreeJS.
                    </p>

                </div>
            </article>
        </v-container>
    </main>
</template>

<style scoped>
.research-page {
    min-height: 100vh;
    color: #242621;
    background: #e9e7df;
}

.page-content {
    max-width: 1080px;
}

.page-header {
    max-width: 38rem;
    margin-bottom: 4rem;
}

.kicker {
    margin-bottom: 0.75rem;
}

h1,
h2,
p,
dl,
dd {
    margin-top: 0;
}

h1 {
    margin-bottom: 1rem;
    font-size: clamp(3rem, 8vw, 6.5rem);
    font-weight: 700;
    letter-spacing: -0.07em;
    line-height: 0.9;
}

.intro {
    margin-bottom: 0;
    color: #66675f;
    font-size: 1.15rem;
    line-height: 1.55;
}

.research-project {
    border-top: 1px solid #c5c3ba;
}

.featured-project {
    display: grid;
    grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);
    gap: clamp(2rem, 6vw, 5rem);
    padding: 2.5rem 0 5rem;
}

.project-number {
    margin-bottom: 1.5rem;
}

h2 {
    margin-bottom: 1.2rem;
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 600;
    letter-spacing: -0.04em;
}

.project-description {
    color: #66675f;
    line-height: 1.7;
}

.project-description a {
    color: #ae4f35;
    font-weight: 600;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.2em;
}

.project-details {
    margin: 2rem 0 0;
}

.project-details div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.7rem 0;
    border-top: 1px solid #c5c3ba;
}

.project-details dt {
    color: #77786e;
    font-size: 0.85rem;
}

.project-details dd {
    margin-bottom: 0;
    text-align: right;
    font-size: 0.85rem;
    font-weight: 600;
}

.project-images {
    min-height: 360px;
}

.project-image {
    height: 100%;
    min-height: 360px;
    background: #f2f0e9;
}

.text-project {
    display: block;
    width: 100%;
    padding: 2.5rem 0 3rem;
}

.text-project .project-copy {
    max-width: none;
}

.text-project .project-description {
    max-width: none;
}

@media (max-width: 700px) {

    .featured-project,
    .text-project {
        grid-template-columns: 1fr;
    }

    .project-images,
    .project-image {
        min-height: 260px;
    }

    .text-project {
        gap: 0;
    }
}
</style>
