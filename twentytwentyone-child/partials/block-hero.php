<?php

/**
 * Hero Block Template
 */

$blockName = "hero";
$classes = "section-{$blockName}";

// Values
$heading = __('Color changing title', 'twentytwentyone');
$colors  = array(
  'pink'    => '#f193de',
  'green'   => '#93f1aa',
  'red'     => '#cb1a1a',
  'yellow'  => '#eade5d',
  'blue'    => '#5d95ea'
);

?>

<section class="<?php echo esc_attr($classes); ?>">
  <div class="section-inner">
    <div class="wrapper">
      <div class="hero-content">


        <?php if ($heading) : ?>
          <h2 class="h2 title-hero"><?php echo $heading; ?></h2>
        <?php endif; ?>

        <div class="countdown">
          <p class="countdown-label"><?php _e('Countdown', 'twentytwentyone'); ?></p>
        </div>

        <?php if ($colors) : ?>
          <div class="btn-group button-colors">
            <?php foreach ($colors as $color => $value) : ?>
              <div class="btn-item">
                <button class="button-color btn btn-<?php echo $color; ?>" data-color="<?php echo $value; ?>"><?php echo ucfirst($color); ?></button>
              </div>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>

</section>