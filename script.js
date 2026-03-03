import java.util.Arrays;
import java.util.List;

public class PetShopAnalise {
    public static void main(String[] args) {
        List<String> pets = Arrays.asList("Jorge", "Joaquim", "Mikaelly", "Laura", "Nicole", "Thamily");
        
        long totalComA = pets.stream()
            .filter(nome -> nome.toUpperCase().contains("A"))
            .count();

        System.out.println("Nomes que possuem a letra A: " + totalA);
    }
}
