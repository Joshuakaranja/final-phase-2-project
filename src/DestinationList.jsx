return (
  <div>
    <h2 style={styles.title}>🗺️ Your Saved Destinations</h2>

    <div style={styles.destinationsGrid}>
      {destinations.map((destination) => (
        <div key={destination.id} style={styles.destinationCard}>
          {editingId === destination.id ? (
            <form onSubmit={handleSubmit} style={styles.editForm}>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                style={styles.input}
                placeholder="Destination"
              />
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={styles.input}
                placeholder="Description"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="number"
                name="budgetedAmount"
                value={formData.budgetedAmount}
                onChange={handleChange}
                style={styles.input}
                placeholder="Budget Amount"
              />
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                style={styles.input}
                placeholder="Image URL"
              />
              <button type="submit" style={styles.saveButton}>
                💾 Save Changes
              </button>
            </form>
          ) : (
            <div style={styles.cardContent}>
              <div style={styles.imageContainer}>
                <img
                  src={destination.image}
                  alt={destination.destination}
                  style={styles.image}
                />
              </div>
              <div style={styles.cardInfo}>
                <h3 style={styles.destinationName}>
                  {destination.destination}
                </h3>
                <p style={styles.description}>{destination.description}</p>
                <div style={styles.details}>
                  <p style={styles.date}>
                    📅 {new Date(destination.date).toLocaleDateString()}
                  </p>
                  <p style={styles.budget}>💰 ${destination.budgetedAmount}</p>
                </div>
                <div style={styles.buttonGroup}>
                  <button
                    onClick={() => handleEdit(destination)}
                    style={styles.editButton}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(destination.id)}
                    style={styles.deleteButton}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
