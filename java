import java.util.List;
import java.util.stream.Collectors;

public class ListaPremium {
    public static void main(String[] args) {
        List<String> convidados = List.of("Amanda", "Bruno", "Arthur", "Carlos", "Alice", "Daniel", "Augusto");

        // Loop e Transformação (Imprimindo bonito no console)
        System.out.println("---------- LISTA VIP ----------");
        convidados.forEach(nome -> System.out.println(">> " + nome.toUpperCase()));

        // Contagem usando Stream API (Moderno)
        long contadorA = convidados.stream()
                .filter(n -> n.toUpperCase().startsWith("A"))
                .count();

        System.out.println("-------------------------------");
        System.out.println("TOTAL COM LETRA 'A': " + contadorA);
    }
}
