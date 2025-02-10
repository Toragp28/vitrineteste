
const langageCards = document.querySelectorAll('.langage-card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalCode = document.getElementById('modal-code');
const closeModal = document.querySelector('.close');
const copyButton = document.getElementById('copy-button');

const scripts = {
    java: `import java.util.ArrayList;
import java.util.Scanner;

public class TodoList {
    private ArrayList<String> tasks = new ArrayList<>();

    public void addTask(String task) {
        tasks.add(task);
        System.out.println("Tâche ajoutée : " + task);
    }

    public void showTasks() {
        if (tasks.isEmpty()) {
            System.out.println("Aucune tâche pour le moment.");
        } else {
            System.out.println("Vos tâches :");
            for (int i = 0; i < tasks.size(); i++) {
                System.out.println((i + 1) + ". " + tasks.get(i));
            }
        }
    }

    public static void main(String[] args) {
        TodoList todoList = new TodoList();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\n1. Ajouter une tâche\n2. Afficher les tâches\n3. Quitter");
            System.out.print("Choisissez une option : ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Pour consommer la nouvelle ligne

            switch (choice) {
                case 1:
                    System.out.print("Entrez la tâche : ");
                    String task = scanner.nextLine();
                    todoList.addTask(task);
                    break;
                case 2:
                    todoList.showTasks();
                    break;
                case 3:
                    System.out.println("Au revoir !");
                    scanner.close();
                    return;
                default:
                    System.out.println("Option invalide.");
            }
        }
    }
}`,
    python: `import requests
from bs4 import BeautifulSoup

def scrape_website(url):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Vérifie si la requête a réussi
        soup = BeautifulSoup(response.text, 'html.parser');

        # Exemple : Extraire tous les titres (balises <h1>)
        titles = soup.find_all('h1');
        for title in titles:
            print(title.text.strip());

    except requests.exceptions.RequestException as e:
        print(f"Erreur lors de la requête : {e}");

if __name__ == "__main__":
    url = input("Entrez l'URL du site à scraper : ");
    scrape_website(url);`,
    csharp: `using System;

class Calculator
{
    static void Main()
    {
        Console.WriteLine("Calculatrice simple");
        Console.WriteLine("1. Addition\n2. Soustraction\n3. Multiplication\n4. Division");
        Console.Write("Choisissez une opération : ");
        int choice = int.Parse(Console.ReadLine());

        Console.Write("Entrez le premier nombre : ");
        double num1 = double.Parse(Console.ReadLine());
        Console.Write("Entrez le deuxième nombre : ");
        double num2 = double.Parse(Console.ReadLine());

        double result = 0;

        switch (choice)
        {
            case 1:
                result = num1 + num2;
                break;
            case 2:
                result = num1 - num2;
                break;
            case 3:
                result = num1 * num2;
                break;
            case 4:
                if (num2 != 0)
                    result = num1 / num2;
                else
                    Console.WriteLine("Erreur : Division par zéro.");
                break;
            default:
                Console.WriteLine("Option invalide.");
                return;
        }

        Console.WriteLine($"Résultat : {result}");
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

#define MAX_CONTACTS 100
#define NAME_LENGTH 50
#define PHONE_LENGTH 15

struct Contact {
    char name[NAME_LENGTH];
    char phone[PHONE_LENGTH];
};

struct Contact contacts[MAX_CONTACTS];
int contactCount = 0;

void addContact() {
    if (contactCount >= MAX_CONTACTS) {
        printf("La liste de contacts est pleine.\n");
        return;
    }

    printf("Entrez le nom : ");
    scanf("%s", contacts[contactCount].name);
    printf("Entrez le numéro de téléphone : ");
    scanf("%s", contacts[contactCount].phone);

    contactCount++;
    printf("Contact ajouté avec succès.\n");
}

void showContacts() {
    if (contactCount == 0) {
        printf("Aucun contact enregistré.\n");
        return;
    }

    printf("Liste des contacts :\n");
    for (int i = 0; i < contactCount; i++) {
        printf("%d. Nom : %s, Téléphone : %s\n", i + 1, contacts[i].name, contacts[i].phone);
    }
}

int main() {
    int choice;

    while (1) {
        printf("\n1. Ajouter un contact\n2. Afficher les contacts\n3. Quitter\n");
        printf("Choisissez une option : ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                addContact();
                break;
            case 2:
                showContacts();
                break;
            case 3:
                printf("Au revoir !\n");
                return 0;
            default:
                printf("Option invalide.\n");
        }
    }
}`,
    kalilinux: `#!/bin/bash

# Vérifie si Nmap est installé
if ! command -v nmap &> /dev/null; then
    echo "Nmap n'est pas installé. Veuillez l'installer avec 'sudo apt install nmap'."
    exit 1
fi

# Demande l'adresse IP à scanner
read -p "Entrez l'adresse IP à scanner : " ip

# Scan des ports ouverts
echo "Début du scan de l'adresse IP $ip..."
nmap -sV $ip

echo "Scan terminé."`
};


langageCards.forEach(card => {
    card.addEventListener('click', () => {
        const lang = card.getAttribute('data-lang');
        modalTitle.textContent = `Exemple de code en ${lang.toUpperCase()}`;
        modalCode.textContent = scripts[lang];
        modal.style.display = 'flex';
    });
});

// Fermer la modale
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(modalCode.textContent)
        .then(() => {
            alert('Code copié dans le presse-papiers !');
        })
        .catch(() => {
            alert('Erreur lors de la copie du code.');
        });
});


const bgMusic = document.getElementById("bgMusic");
const musicControlButton = document.getElementById("musicControlButton");


window.addEventListener("load", () => {
    bgMusic.play().catch(error => console.log("La lecture automatique a été bloquée par le navigateur."));
});


musicControlButton.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicControlButton.textContent = "🔊";
    } else {
        bgMusic.pause();
        musicControlButton.textContent = "🔇";
    }
});



playPauseButton.addEventListener('click', () => {
    if (bgVideo.paused) {
        bgVideo.play();
        playPauseButton.textContent = '⏸️';
    } else {
        bgVideo.pause();
        playPauseButton.textContent = '▶️';
    }
});

