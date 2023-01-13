import React from 'react';
import './about.css';

const About = () => {

  return(
    <div className='d-flex flex-column align-items-center justify-content-center p-5 mx-auto' style={{ maxWidth: "1000px" }}>
      <h2>Gransize Analysis</h2>
      <p style={{ textIndent: "50px" }}>Grain size is widely known and accepted to be the principal and fundamental property of sediment textural analysis that governs entrainment, transport, and deposition thereby yielding more information such as genesis, climate controls, modes of transportation, energies, and more (<em>Folk and Ward, 1957; Blott and Pye, 2001</em>). Many sediment analysis techniques have been developed in order to better understand both fluvial and non-fluvial processes concerning and regarding grain size (<em>Moberley et al., 1965; Cheng and Liu, 2015</em>). Established analyses and techniques consist of both descriptive and quantitative or statistical approaches (<em>Buscombe et al., 2010</em>). Descriptive types of analysis are used to describe, distinguish, and categorize distinct sedimentary environments (<em>Folk and Ward, 1957</em>). Qualitative descriptors can include and range from transportation, age, composition, size, roundness, sorting, provenance, and response to external forces such as wind or water. Additionally, quantitative descriptors and parameters are employed to also understand and differentiate environments in a statistical manner and can often aid in the categorization and description of environment and grouping.</p>
      <p style={{ textIndent: "50px" }}>Descriptive methods account for controlling environmental factors that lead to physical attributes. In a seminal paper, <em>Folk and Ward (1957)</em> delineated principles and guidelines that have since broadly become standard methods in geology and sedimentology. Such descriptive qualities yield information that can be sorted and grouped into distinct environments. Sorting and roundness are characteristics that are optically described and interpreted to be of certain environments and transportation depending on what side of the spectrum they are on. Other characteristics such as composition and age can be tested through optical and mineralogical identifications or using instruments such as and XRF. These kinds of details can shed light onto source provenance and other important sedimentary process and environmental characterizations.</p>
      <p style={{ textIndent: "50px" }}>Widely accepted statistical methods usually employ some sort of numerical and mathematical analyses that can be applied to grains (<em>Inman, 1952</em>). <em>Inman (1952)</em> provided four statistical modes or moments that directly aid in quantifying grain size distribution, namely the four statistical moments: mean diameter, variance (standard deviation), skewness, and kurtosis. Size-frequency curves have often been used to group distributions, and those curves become more symmetrical and readable when the logarithm of the diameter is plotted instead of the diameter alone (<em>Inman, 1952; Blott and Pye, 2001</em>). The conventionally accepted grouping of sand sediment size classes uses phi notation of <em>Krumbien (1936)</em> which calculates phi as φ = -log2 of the diameter in millimeters. Then, after this logarithmic transform, mean diameter is taken as an overall average of size represented. Variance, or standard deviation, is a calculated value to measure dispersion in a distribution. It is calculated by obtaining one-half the distance between the 16th and 84th percentiles of a distribution (<em>Inman, 1954; Krumbian, 1938</em>).</p>
      <div class='equation'>
        <em>Variance (standard deviation) ∶ σ<sub>1</sub> = </em><div class='fraction'>
          <span class='numerator'><em>(ϕ<sub>84</sub> - ϕ<sub>16</sub>)</em></span>
          <span class='denominator'><em>2</em></span>
          </div>
      </div>
      <p style={{ textIndent: "50px" }}>Skewness is the measurement of the asymmetry of a distribution or displacement of the median from the mean and is calculated using the 5th, 16th, 50th, 84th, and 95th percentiles. It can be graphically represented, normally categorized as neutral (without skew or lopsided tails), positive (tail on the right of the main body), or negative (tail on the left of the main body).</p>
      <div class='equation'>
        <em>Skewness ∶ SK<sub>1</sub> = </em><div class='fraction'>
        <span class='numerator'><em>(ϕ<sub>16</sub> + ϕ<sub>84</sub> - 2ϕ<sub>50</sub>) + (ϕ<sub>5</sub> + ϕ<sub>95</sub> - 2ϕ<sub>50</sub>)</em></span>
        <span class='denominator'><em>(2(ϕ<sub>84</sub> - ϕ<sub>16</sub>)) + (2(ϕ<sub>95</sub> - ϕ<sub>5</sub>))</em></span>
        </div>
      </div>
      <p style={{ textIndent: "50px" }}>Kurtosis is a measurement of the “tails” in a distribution curve, or in other words relating to grain size analysis, is a comparison of main body sorting to the sorting in the tails (<em>Folk and Ward, 1957</em>). It is calculated using the 5th, 25th, 75th, and 95th percentiles. Descriptors, depending on the calculated value, range from mesokurtic (even distribution), leptokurtic (concentrated distribution), and platykurtic (broad distribution).</p>
      <div class='equation'>
        <em>Kurtosis ∶ K<sub>G</sub> = </em><div class='fraction'>
        <span class='numerator'><em>(ϕ<sub>95</sub> - ϕ<sub>5</sub>)</em></span>
        <span class='denominator'><em>(2.44 (ϕ<sub>75</sub> - ϕ<sub>25</sub>))</em></span>
        </div>
      </div>
    </div>
  )
}

export default About;