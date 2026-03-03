import java.util.ArrayList;
import java.util.List;

public class ListaConvidados {
    public static void main(String[] args) {
        // Criando a lista de convidados
        List<String> convidados = new ArrayList<>();
        convidados.add("Alice");
        convidados.add("Bruno");
        convidados.add("Amanda");
        convidados.add("Carlos");
        convidados.add("Beatriz");
        convidados.add("Arthur");

        int contadorA = 0;

        System.out.println("--- Lista de Convidados ---");

        // Loop para imprimir em maiúsculas e contar nomes com 'A'
        for (String nome : convidados) {
            // Imprime em letras maiúsculas
            System.out.println(nome.toUpperCase());

            // Verifica se começa com 'A' (ignorando case)
            if (nome.toUpperCase().startsWith("A")) {
                contadorA++;
            }
        }

        System.out.println("---------------------------");
        System.out.println("Total de nomes que começam com 'A': " + contadorA);
    }
}
