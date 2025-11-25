import { useState } from "react";
import "./App.css";

function App() {
	return (
		<>
			<div class="flex h-screen lg:flex-row-reverse flex-col lg:overflow-hidden">
				<div class="lg:w-1/2 w-full lg:sticky lg:top-0 h-screen">
					<div class="h-screen flex flex-col justify-center items-center bg-green">
						<h1 class="text-6xl font-semibold my-6">
							Yacine
						</h1>
						<img
							alt="Profile Picture"
							width="300"
							height="300"
							class="rounded-[150px] my-4"
							src="/profile.jpg"
						/>
						<h2 class="text-3xl font-semibold my-6">
							Ingénieur en Informatique
						</h2>
						<div class="mt-12 flex flex-col items-center">
							<span class="text-lg font-semibold mb-6">
								Trouvez moi sur:
							</span>
							<div class="flex space-x-12">
								<a
									href="https://github.com/YacineGhoulam"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center hover:text-light transition"
								>
									{/* GitHub Icon */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6 mr-2"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z" />
									</svg>
									GitHub
								</a>
								<a
									href="https://www.linkedin.com/in/ghlamallah-yacine/"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center hover:text-light transition"
								>
									{/* LinkedIn Icon */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6 mr-2"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.594v5.602z" />
									</svg>
									LinkedIn
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="lg:w-1/2 w-full h-screen lg:overflow-y-auto no-scrollbar">
					<div class="bg-light text-green py-12 flex flex-col items-center">
						{/* Profil Personnel */}
						<div class="p-8 lg:w-3/5 w-full flex flex-col justify-left items-start">
							<h2 class="text-xl font-bold uppercase my-2">
								Profil Personnel
							</h2>
							<hr />
							<p class="mt-6 text-left">
								Passionné d’informatique et fort
								de 4 ans d’expérience en
								développement web full stack, je
								souhaite faire évoluer ma
								carrière et suis à la recherche
								de nouveaux challenges. Curieux
								et prêt à apprendre, j’aime
								travailler dans des équipes
								amicales et dynamiques.
							</p>
						</div>
						{/* Expériences Professionnelle */}
						<div class="p-8 lg:w-3/5 w-full flex flex-col justify-left items-start">
							<h2 class="text-xl font-bold uppercase my-2">
								Expériences Professionnelles
							</h2>
							<hr class="w-full" />
							<div class="text-left">
								<div class="my-6">
									<h3 class="font-semibold text-lg my-2">
										Développeur Web Full
										Stack — IPConnex
									</h3>
									<p class="italic my-2">
										Jan 2022 – Présent |
										Montréal, Canada
									</p>
									<ul class="list-disc ml-6">
										<li>
											Création de
											sites web
											complets
											(ReactJS,
											Node.js, PHP,
											WordPress).
										</li>
										<li>
											Maintenance
											d’un CRM avec
											Java Spring
											Boot.
										</li>
										<li>
											Développement
											de modules
											Python pour
											ERP et bases
											de données.
										</li>
										<li>
											Automatisation
											de tâches et
											intégration
											d’IA via des
											scripts
											Python.
										</li>
									</ul>
								</div>
								<div class="my-6">
									<h3 class="font-semibold text-lg my-2">
										Développeur Web
										Freelance
									</h3>
									<p class="italic my-2">
										Nov 2021 – Présent
									</p>
									<ul class="list-disc ml-6">
										<li>
											Application de
											quiz en React
											Native pour
											une entreprise
											éducative.
										</li>
										<li>
											Développement
											et maintenance
											de sites
											WordPress
											personnalisés.
										</li>
									</ul>
								</div>
								<div class="my-6">
									<h3 class="font-semibold text-lg my-2">
										Développeur Web
										Backend — Digimium
									</h3>
									<p class="italic my-2">
										Juin 2021 – Nov 2021
										| Paris, France
									</p>
									<ul class="list-disc ml-6">
										<li>
											Développement
											de scripts
											Node.js pour
											l’intégration
											Stripe.
										</li>
										<li>
											Mise à jour et
											maintenance du
											site WordPress
											de
											l’entreprise.
										</li>
									</ul>
								</div>
								<div class="my-6">
									<h3 class="font-semibold text-lg my-2">
										Projet de Fin
										d’Études
									</h3>
									<p class="italic my-2">
										Déc 2020 – Sep 2021
										| Quizzito / ENSTTIC
									</p>
									<ul class="list-disc ml-6">
										<li>
											Système de
											recommandation
											pour livres
											éducatifs :
											clustering,
											extraction,
											classification.
										</li>
										<li>
											Amélioration
											de
											l’expérience
											utilisateur à
											travers des
											solutions IA.
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* Formation & Certifications */}
						<div class="p-8 lg:w-3/5 w-full flex flex-col justify-left items-start">
							<h2 class="text-xl font-bold uppercase my-2">
								Formation & Certifications
							</h2>
							<hr class="w-full" />
							<div class="text-left">
								<div class="my-6">
									<h3 class="font-semibold text-lg my-2">
										Master Spécialisé
										Réseaux et Services
									</h3>
									<p class="italic my-2">
										Télécom SudParis |
										2025 – présent
									</p>
								</div>
								<div class="my-6">
									<h3 class="font-semibold text-lg my-2">
										Diplôme d’Ingénieur
										en Réseaux
										Informatiques
									</h3>
									<p class="italic my-2">
										ENSTTIC | 2016 –
										2021
									</p>
								</div>
								<div class="my-6">
									<h3 class="font-semibold text-lg my-2">
										Machine Learning &
										Deep Learning
									</h3>
									<p class="italic my-2">
										Stanford / Coursera
										| 2020
									</p>
								</div>
								<div class="my-6">
									<h3 class="font-semibold text-lg my-2">
										AWS Cloud
										Practitioner
										Essentials
									</h3>
									<p class="italic my-2">
										AWS | 2025
									</p>
								</div>
							</div>
						</div>

						{/* Compétences Techniques */}
						<div class="p-8 lg:w-3/5 w-full flex flex-col justify-left items-start">
							<h2 class="text-xl font-bold uppercase my-2">
								Compétences Techniques
							</h2>
							<hr class="w-full" />
							<div class="text-left">
								<p class="mt-4">
									<span class="text-lg font-semibold">
										Langages de
										Programmation:
									</span>{" "}
									Python, Java, PHP,
									JavaScript
								</p>
								<p class="mt-4">
									<span class="text-lg font-semibold">
										Cloud & DevOps:
									</span>{" "}
									AWS, Docker, Linux, CI/CD
								</p>

								<p class="mt-4">
									<span class="text-lg font-semibold">
										Bases de données:
									</span>{" "}
									MySQL, MongoDB, Firebase
								</p>

								<p class="mt-4">
									<span class="text-lg font-semibold">
										Frameworks &
										Technologies:
									</span>{" "}
									ReactJS, Node.js, Spring
									Boot, ReactNative,
									TensorFlow, Scikit-learn
								</p>
							</div>
						</div>
						{/* Expériences de Bénévolat */}
						<div class="p-8 lg:w-3/5 w-full flex flex-col justify-left items-start">
							<h2 class="text-xl font-bold uppercase my-2">
								Expériences de Bénévolat
							</h2>
							<hr class="w-full" />
							<div class="text-left">
								<ul class="list-disc ml-6">
									<li class="mt-4">
										Président du projet
										“Coffee Shop
										Languages”
									</li>
									<li class="mt-4">
										Chef d’équipe
										Éducation & Gestion
										de réseau — AIESEC
									</li>
									<li class="mt-4">
										Enseignant en
										Développement Web —
										Club Horizon
									</li>
								</ul>
							</div>
						</div>
						{/* Langues */}
						<div class="p-8 lg:w-3/5 w-full flex flex-col justify-left items-start">
							<h2 class="text-xl font-bold uppercase my-2">
								Langues
							</h2>
							<hr class="w-full" />
							<div class="text-left">
								<ul class="list-disc ml-6">
									<li class="mt-4">
										Français — C2 (TCF)
									</li>
									<li class="mt-4">
										Anglais — C1 (IELTS
										7.5)
									</li>
									<li class="mt-4">
										Arabe — Langue
										maternelle
									</li>
								</ul>
							</div>
						</div>

						{/* Download Resume Button */}
						<div class="p-8 lg:w-3/5 w-full flex flex-col justify-left items-start">
							<a
								class="bg-green text-light px-6 py-3 rounded hover:bg-dimgreen transition"
								href="/CV.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								Télécharger le CV PDF
							</a>
						</div>
						{/* Footer */}
						<div class="p-8 lg:w-3/5 w-full flex flex-col justify-left items-start">
							<p class="text-sm text-green">
								Fait avec du
								<span class="mx-2">☕</span>,
								<span class="mx-2">🎧</span>, et
								un peu trop d’onglets ouverts.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
