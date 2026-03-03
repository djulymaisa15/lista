import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;

public class PetShopSistema {
    public static void main(String[] args) {
        List<String> pets = Arrays.asList("Jorge", "Joaquim", "Mikaelly", "Laura", "Nicole", "Thamily");
        
        // Simulação do processamento de nomes com mais de 5 letras usando Range
        IntStream.range(0, pets.size())
                 .filter(i -> pets.get(i).length() > 5)
                 .forEach(i -> System.out.println("PET FILTRADO: " + pets.get(i).toUpperCase()));
    }
}
