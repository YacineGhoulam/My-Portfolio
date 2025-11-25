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
							width="200"
							height="200"
							class="rounded-full my-4"
							src="/profile.jpg"
						/>
						<h2 class="text-3xl font-semibold my-6">
							Ingénieur en Informatique
						</h2>
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
							<p class="my-6 text-left">
								Ingénieur en informatique
								passionné par le développement
								web et l’intelligence
								artificielle. Curieux, adaptable
								et motivé, j’aime apprendre de
								nouvelles technologies et
								collaborer dans des
								environnements dynamiques. Je
								m’investis pleinement pour
								livrer des solutions efficaces
								alliant performance et
								créativité.
							</p>
						</div>
						{/* Expériences Professionnelle */}
						<div class="p-8 lg:w-3/5 w-full flex flex-col justify-left items-start">
							<h2 class="text-xl font-bold uppercase my-2">
								Expériences Professionnelle
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
											ERP & bases de
											données.
										</li>
										<li>
											Automatisation
											de tâches et
											intégration
											d’IA via
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
							<button class="bg-green text-light px-6 py-3 rounded hover:bg-dimgreen transition">
								Télécharger le CV PDF
							</button>
						</div>
						{/* Footer */}
						<div class="p-8 lg:w-3/5 w-full flex flex-col justify-left items-start">
							<p class="text-sm text-green">
								Fait avec
								<span class="mx-2">☕</span>,
								<span class="mx-2">🎧</span>,
								trop d’onglets ouverts.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
