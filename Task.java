// Task.java
@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String title;

    private String description;
    private LocalDate dueDate;
    private boolean completed;

    // getters and setters
}
